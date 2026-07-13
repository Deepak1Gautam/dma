"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";

interface Application {
  id: string;
  projectTitle: string;
  status: string;
  studentEmail: string;
}

export default function MyApplications() {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    loadApplications();
  }, []);

  async function loadApplications() {
    const snapshot = await getDocs(collection(db, "applications"));

    const list: Application[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (data.studentEmail === auth.currentUser?.email) {
        list.push({
          id: doc.id,
          projectTitle: data.projectTitle,
          status: data.status,
          studentEmail: data.studentEmail,
        });
      }
    });

    setApplications(list);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">

      <h1 className="text-4xl font-bold text-blue-400 mb-8">
        My Applications
      </h1>

      <div className="space-y-6">

        {applications.map((app) => (

          <div
            key={app.id}
            className="bg-white/10 rounded-2xl p-6"
          >

            <h2 className="text-2xl font-bold">
              {app.projectTitle}
            </h2>

            <p className="mt-3 text-yellow-400">
              Status : {app.status}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}