"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const freelancers = [
  {
    name: "Deepak",
    role: "React Developer",
    rating: "4.9",
    initial: "D",
    color: "bg-blue-600",
  },
  {
    name: "Aditi",
    role: "Graphic Designer",
    rating: "4.8",
    initial: "A",
    color: "bg-pink-600",
  },
  {
    name: "Rahul",
    role: "Data Analyst",
    rating: "5.0",
    initial: "R",
    color: "bg-green-600",
  },
];

export default function TopFreelancers() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Top Freelancers ⭐
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {freelancers.map((freelancer, index) => (

          <motion.div
            key={freelancer.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="bg-white/10 backdrop-blur-md border border-gray-800 rounded-3xl p-8 text-center"
          >

            <div
              className={`w-24 h-24 rounded-full ${freelancer.color} mx-auto flex items-center justify-center text-3xl font-bold`}
            >
              {freelancer.initial}
            </div>

            <h3 className="text-2xl font-bold mt-5">
              {freelancer.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {freelancer.role}
            </p>

            <div className="flex justify-center items-center gap-2 mt-4 text-yellow-400">
              <Star size={18} fill="currentColor" />
              {freelancer.rating}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-blue-600 px-6 py-3 rounded-xl"
            >
              Hire Now
            </motion.button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
                 
