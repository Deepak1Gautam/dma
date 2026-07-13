"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";

interface Project {
  title: string;
  budget: string;
  description: string;
  userName: string;
}

export default function ProjectDetails() {
  const params = useParams();
  const id = params.id as string;

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProject(docSnap.data() as Project);
    }
  }

  async function handleApply() {
    try {
      await addDoc(collection(db, "applications"), {
        projectId: id,
        projectTitle: project?.title,
        studentName: auth.currentUser?.displayName,
        studentEmail: auth.currentUser?.email,
        status: "Pending",
        appliedAt: new Date(),
      });

      alert("Application Submitted Successfully 🎉");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">

      <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-blue-400">
          {project.title}
        </h1>

        <p className="text-green-400 text-2xl mt-4">
          ₹ {project.budget}
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Description
        </h2>

        <p className="text-gray-300 mt-2">
          {project.description}
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Posted By
        </h2>

        <p className="text-blue-400 mt-2">
          {project.userName}
        </p>

        <button
          onClick={handleApply}
          className="mt-10 w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold"
        >
          Apply Now
        </button>

      </div>

    </div>
  );
}