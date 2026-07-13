"use client";

import {
  Mail,
  Phone,
  MapPin,
  Code,
  GraduationCap,
  Star,
  User,
} from "lucide-react";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

export default function ProfilePage() {
  const [name, setName] = useState("Student");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      setName(user.displayName || "Student");
      setEmail(user.email || "");

      try {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    setPhone(data.phone || "");
    setCollege(data.college || "");
    setLocation(data.location || "");
    setSkills(data.skills || "");
    setBio(data.bio || "");

    if (data.name) {
      setName(data.name);
    }
  }
} catch (error) {
  console.log(error);
}
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-6">

      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl border border-gray-700 p-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          <div className="w-36 h-36 rounded-full bg-blue-600 flex items-center justify-center text-6xl font-bold shadow-lg">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              {name}
            </h1>

            <p className="text-gray-400 mt-2 flex items-center gap-2">
              <User size={18} />
              Computer Engineering Student
            </p>

            <p className="text-yellow-400 mt-3 flex items-center gap-2">
              <Star fill="yellow" size={18} />
              4.9 Rating
            </p>

          </div>

        </div>

        {/* Contact */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white/10 rounded-xl p-5 flex items-center gap-3">
            <Mail className="text-blue-400" />
            {email}
          </div>

          <div className="bg-white/10 rounded-xl p-5 flex items-center gap-3">
            <Phone className="text-green-400" />
            {phone || "Not Added"}
          </div>

          <div className="bg-white/10 rounded-xl p-5 flex items-center gap-3">
            <MapPin className="text-red-400" />
            {location || "Not Added"}
          </div>

        </div>

        {/* College */}

        <div className="mt-10 bg-white/10 rounded-xl p-6">

          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <GraduationCap />
            College
          </h2>

          <p className="mt-4 text-gray-300">
            {college || "Not Added"}
          </p>

        </div>

        {/* Skills */}

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Skills
          </h2>

          <div className="bg-white/10 rounded-xl p-5 flex items-center gap-3">
            <Code className="text-blue-400" />
            {skills || "No Skills Added"}
          </div>

        </div>

                {/* About */}

        <div className="mt-10 bg-white/10 rounded-xl p-6">

          <h2 className="text-2xl font-bold text-blue-400">
            About Me
          </h2>

          <p className="text-gray-300 mt-4 leading-8">
            {bio || "No Bio Added"}
          </p>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-5 mt-12">

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition">
            Hire Me
          </button>

          <button className="border border-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl transition">
            Download Resume
          </button>

          <Link href="/edit-profile">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-semibold transition">
              Edit Profile
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}