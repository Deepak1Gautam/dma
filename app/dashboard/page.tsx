"use client";

import Link from "next/link";

import {
  Briefcase,
  DollarSign,
  GraduationCap,
  User,
  Bell,
  Star,
  Code,
  Palette,
  FileText,
  LogOut,
} from "lucide-react";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [userName, setUserName] = useState("Student");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      setUserName(user.displayName || "Student");
      setUserEmail(user.email || "");
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">

      {/* Header */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <div>
          <h1 className="text-3xl font-bold text-blue-400">
            DMA Dashboard
          </h1>

          <p className="text-gray-300 mt-2">
            Welcome Back, {userName} 👋
          </p>

          <p className="text-gray-500 text-sm">
            {userEmail}
          </p>
        </div>

        <div className="flex items-center gap-4">

  <Bell className="cursor-pointer hover:text-blue-400" />

  <Link href="/post-project">
    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold transition">
      + Post Project
    </button>
  </Link>

  <Link href="/my-projects">
    <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl font-semibold transition">
      My Projects
    </button>
  </Link>

  <button
    onClick={handleLogout}
    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition"
  >
    <LogOut size={18} />
    Logout
  </button>

  <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center">
    <User />
  </div>

</div>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 p-10">

        <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition">
          <DollarSign className="text-green-400" />
          <h2 className="text-3xl font-bold mt-3">₹4,500</h2>
          <p>Total Earnings</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition">
          <Briefcase className="text-blue-400" />
          <h2 className="text-3xl font-bold mt-3">12</h2>
          <p>Projects</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition">
          <GraduationCap className="text-yellow-400" />
          <h2 className="text-3xl font-bold mt-3">8</h2>
          <p>Courses</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition">
          <Star className="text-orange-400" />
          <h2 className="text-3xl font-bold mt-3">4.9</h2>
          <p>Rating</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="grid md:grid-cols-2 gap-8 px-10 pb-10">

        {/* Recent Projects */}
        <div className="bg-white/10 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Recent Projects
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>PPT Design</span>
              <span className="text-green-400">Completed</span>
            </div>

            <div className="flex justify-between">
              <span>Portfolio Website</span>
              <span className="text-yellow-400">Running</span>
            </div>

            <div className="flex justify-between">
              <span>Python Assignment</span>
              <span className="text-blue-400">Pending</span>
            </div>

          </div>

        </div>

        {/* Trending Skills */}
        <div className="bg-white/10 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Trending Skills
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <Code className="text-blue-400" />
              Web Development
            </div>

            <div className="flex items-center gap-3">
              <Palette className="text-pink-400" />
              Graphic Design
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-green-400" />
              Assignment Writing
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}