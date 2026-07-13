"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful 🎉");

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-gray-700 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-400">
          DMA Login
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Welcome Back 👋
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 focus:border-blue-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 focus:border-blue-500 outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-bold transition"
          >
            Login
          </button>

        </div>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?
          <a
            href="/signup"
            className="text-blue-400 ml-2 hover:underline"
          >
            Sign Up
          </a>
        </p>

      </div>

    </div>
  );
}