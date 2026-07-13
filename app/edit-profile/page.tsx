"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    if (!auth.currentUser) return;

    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      setName(data.name || "");
      setPhone(data.phone || "");
      setCollege(data.college || "");
      setLocation(data.location || "");
      setSkills(data.skills || "");
      setBio(data.bio || "");
    }
  }

  async function handleSave() {
    if (!auth.currentUser) {
      alert("Please login first");
      return;
    }

    try {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name,
        email: auth.currentUser.email,
        phone,
        college,
        location,
        skills,
        bio,
      });

      alert("Profile Updated Successfully 🎉");

      router.push("/profile");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex justify-center items-center p-6">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl border border-gray-700 p-8">

        <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
          Edit Profile
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Skills (React, Firebase, UI/UX...)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 outline-none focus:border-blue-500"
          />

          <textarea
            rows={5}
            placeholder="Tell us about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSave}
            className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl font-bold transition"
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}