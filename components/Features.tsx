import {
  GraduationCap,
  Palette,
  CodeXml,
  MessageCircle,
  Users,
  MapPin,
} from "lucide-react";

export default function Features() {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-12">
        Everything Students Need
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <CodeXml size={40} className="text-blue-400" />
          <h3 className="text-xl font-bold mt-4">Freelancing</h3>
          <p className="text-gray-400 mt-2">
            Coding, PPT, Design & Projects.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <GraduationCap size={40} className="text-blue-400" />
          <h3 className="text-xl font-bold mt-4">Tutoring</h3>
          <p className="text-gray-400 mt-2">
            Learn from talented students.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <Palette size={40} className="text-blue-400" />
          <h3 className="text-xl font-bold mt-4">Art Commission</h3>
          <p className="text-gray-400 mt-2">
            Hire artists for creative work.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <MessageCircle size={40} className="text-blue-400" />
          <h3 className="text-xl font-bold mt-4">Live Chat</h3>
          <p className="text-gray-400 mt-2">
            Talk directly with clients.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <Users size={40} className="text-blue-400" />
          <h3 className="text-xl font-bold mt-4">Campus Community</h3>
          <p className="text-gray-400 mt-2">
            College groups and discussions.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <MapPin size={40} className="text-blue-400" />
          <h3 className="text-xl font-bold mt-4">Nearby Students</h3>
          <p className="text-gray-400 mt-2">
            Find students near your campus.
          </p>
        </div>

      </div>

    </section>
  );
}