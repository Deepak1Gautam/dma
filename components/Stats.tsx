import { Users, Briefcase, GraduationCap, Building2 } from "lucide-react";

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        DMA in Numbers 🚀
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-800 hover:scale-105 hover:border-blue-500 transition duration-300">

          <Users className="mx-auto text-blue-400" size={42} />

          <h2 className="text-4xl font-bold mt-4">
            10K+
          </h2>

          <p className="text-gray-400 mt-2">
            Students
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-800 hover:scale-105 hover:border-green-500 transition duration-300">

          <Briefcase className="mx-auto text-green-400" size={42} />

          <h2 className="text-4xl font-bold mt-4">
            2500+
          </h2>

          <p className="text-gray-400 mt-2">
            Projects
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-800 hover:scale-105 hover:border-yellow-500 transition duration-300">

          <GraduationCap className="mx-auto text-yellow-400" size={42} />

          <h2 className="text-4xl font-bold mt-4">
            500+
          </h2>

          <p className="text-gray-400 mt-2">
            Tutors
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-800 hover:scale-105 hover:border-purple-500 transition duration-300">

          <Building2 className="mx-auto text-purple-400" size={42} />

          <h2 className="text-4xl font-bold mt-4">
            100+
          </h2>

          <p className="text-gray-400 mt-2">
            Colleges
          </p>

        </div>

      </div>

    </section>
  );
}