"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function PostProject() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  async function handlePost() {

    if (!title || !budget || !description) {
      alert("Please fill all fields");
      return;
    }

    try {

      await addDoc(collection(db, "projects"), {

        title,
        budget,
        description,

        userName: auth.currentUser?.displayName,

        userEmail: auth.currentUser?.email,

        createdAt: new Date(),

      });

      alert("Project Posted Successfully 🚀");

      router.push("/dashboard");

    } catch (err) {

      console.log(err);

      alert("Something went wrong");

    }

  }

  return (

<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex justify-center items-center">

<div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[600px]">

<h1 className="text-4xl font-bold text-center text-blue-400">

Post Project

</h1>

<div className="space-y-5 mt-8">

<input

type="text"

placeholder="Project Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="w-full p-4 rounded-xl bg-gray-900 text-white"

/>

<input

type="number"

placeholder="Budget"

value={budget}

onChange={(e)=>setBudget(e.target.value)}

className="w-full p-4 rounded-xl bg-gray-900 text-white"

/>

<textarea

rows={6}

placeholder="Project Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

className="w-full p-4 rounded-xl bg-gray-900 text-white"

/>

<button

onClick={handlePost}

className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold"

>

Post Project

</button>

</div>

</div>

</div>

  );

}