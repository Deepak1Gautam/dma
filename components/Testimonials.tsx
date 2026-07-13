import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        What Students Say 💬
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
          <div className="flex text-yellow-400 mb-4">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>

          <p className="text-gray-300">
            "DMA helped me earn my first ₹10,000 through freelancing while studying."
          </p>

          <h3 className="mt-6 font-bold text-blue-400">
            — Aman Sharma
          </h3>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
          <div className="flex text-yellow-400 mb-4">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>

          <p className="text-gray-300">
            "The tutoring feature made learning much easier from senior students."
          </p>

          <h3 className="mt-6 font-bold text-blue-400">
            — Priya Verma
          </h3>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
          <div className="flex text-yellow-400 mb-4">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>

          <p className="text-gray-300">
            "Finding student developers for my project became simple with DMA."
          </p>

          <h3 className="mt-6 font-bold text-blue-400">
            — Rohan Gupta
          </h3>
        </div>

      </div>

    </section>
  );
}