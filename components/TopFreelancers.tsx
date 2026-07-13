import { Star } from "lucide-react";

export default function TopFreelancers() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Top Freelancers ⭐
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition">

          <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto flex items-center justify-center text-3xl font-bold">
            D
          </div>

          <h3 className="text-2xl font-bold mt-5">
            Deepak
          </h3>

          <p className="text-gray-400 mt-2">
            React Developer
          </p>

          <div className="flex justify-center items-center gap-2 mt-4 text-yellow-400">
            <Star size={18} fill="currentColor" />
            4.9
          </div>

          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Hire Now
          </button>

        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition">

          <div className="w-24 h-24 rounded-full bg-pink-600 mx-auto flex items-center justify-center text-3xl font-bold">
            A
          </div>

          <h3 className="text-2xl font-bold mt-5">
            Aditi
          </h3>

          <p className="text-gray-400 mt-2">
            Graphic Designer
          </p>

          <div className="flex justify-center items-center gap-2 mt-4 text-yellow-400">
            <Star size={18} fill="currentColor" />
            4.8
          </div>

          <button className="mt-6 bg-pink-600 px-6 py-3 rounded-xl hover:bg-pink-700 transition">
            Hire Now
          </button>

        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition">

          <div className="w-24 h-24 rounded-full bg-green-600 mx-auto flex items-center justify-center text-3xl font-bold">
            R
          </div>

          <h3 className="text-2xl font-bold mt-5">
            Rahul
          </h3>

          <p className="text-gray-400 mt-2">
            Data Analyst
          </p>

          <div className="flex justify-center items-center gap-2 mt-4 text-yellow-400">
            <Star size={18} fill="currentColor" />
            5.0
          </div>

          <button className="mt-6 bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700 transition">
            Hire Now
          </button>

        </div>

      </div>

    </section>
  );
}