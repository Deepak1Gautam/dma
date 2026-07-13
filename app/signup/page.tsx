"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      alert("Account Created Successfully 🎉");
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-gray-700 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-400">
          Create Account
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Join DMA Today 🚀
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 focus:border-blue-500 outline-none"
          />

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
            onClick={handleSignup}
            className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-bold transition"
          >
            Create Account
          </button>

        </div>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?
          <a href="/login" className="text-blue-400 ml-2 hover:underline">
            Login
          </a>
        </p>

      </div>

    </div>
  );
}