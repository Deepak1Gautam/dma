"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Project {
  id: string;
  title: string;
  budget: string;
  description: string;
  userName: string;
  userEmail: string;
}

export default function MyProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const snapshot = await getDocs(collection(db, "projects"));

    const list: Project[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (data.userEmail === auth.currentUser?.email) {
        list.push({
          id: doc.id,
          title: data.title,
          budget: data.budget,
          description: data.description,
          userName: data.userName,
          userEmail: data.userEmail,
        });
      }
    });

    setProjects(list);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">

      <h1 className="text-4xl font-bold text-blue-400 mb-8">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white/10 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>

            <p className="text-green-400 mt-2">
              ₹ {project.budget}
            </p>

            <p className="text-gray-300 mt-4">
              {project.description}
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
              View Applicants
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}