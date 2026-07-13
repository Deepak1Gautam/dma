"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Project {
  id: string;
  title: string;
  budget: string;
  description: string;
  userName: string;
}

export default function FindWorkPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const querySnapshot = await getDocs(collection(db, "projects"));

    const list: Project[] = [];

    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...(doc.data() as Omit<Project, "id">),
      });
    });

    setProjects(list);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">

      <h1 className="text-4xl font-bold text-blue-400 mb-8">
        Find Work
      </h1>

      <div className="my-8">
  <input
    type="text"
    placeholder="🔍 Search Projects..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full p-4 rounded-xl bg-white/10 border border-gray-700 text-white outline-none focus:border-blue-500"
  />
</div>

      <div className="grid md:grid-cols-2 gap-6">

        {projects
  .filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase())
  )
  .map((project) => (

          <Link
  href={`/project/${project.id}`}
  key={project.id}
>
  <div className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition cursor-pointer">

            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>

            <p className="text-green-400 mt-2">
              ₹ {project.budget}
            </p>

            <p className="text-gray-300 mt-4">
              {project.description}
            </p>

            <p className="text-blue-400 mt-4">
              Posted By: {project.userName}
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
              Apply
            </button>

            </div>
</Link>

        ))}

      </div>

    </div>
  );
}