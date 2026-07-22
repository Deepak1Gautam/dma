"use client";

import { Star, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const freelancers = [
  {
    name: "Deepak",
    role: "React Developer",
    rating: "4.9",
    initial: "D",
    color: "blue",
    badge: "Top Rated",
  },
  {
    name: "Aditi",
    role: "Graphic Designer",
    rating: "4.8",
    initial: "A",
    color: "pink",
    badge: "Creative Pro",
  },
  {
    name: "Rahul",
    role: "Data Analyst",
    rating: "5.0",
    initial: "R",
    color: "green",
    badge: "Expert",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-600",
    border: "border-blue-500",
    text: "text-blue-400",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-600",
  },
  pink: {
    bg: "bg-pink-600",
    border: "border-pink-500",
    text: "text-pink-400",
    button: "bg-pink-600 hover:bg-pink-700",
    glow: "bg-pink-600",
  },
  green: {
    bg: "bg-green-600",
    border: "border-green-500",
    text: "text-green-400",
    button: "bg-green-600 hover:bg-green-700",
    glow: "bg-green-600",
  },
};

export default function TopFreelancers() {
  return (
    <section className="relative max-w-7xl mx-auto px-8 py-20 overflow-hidden">

      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 text-center mb-12"
      >
        <div className="flex justify-center items-center gap-2">

          <Sparkles className="text-yellow-400" size={24} />

          <h2 className="text-4xl font-bold">
            Top Freelancers
          </h2>

          <Sparkles className="text-yellow-400" size={24} />

        </div>

        <p className="text-gray-400 mt-3">
          Connect with talented students and get your work done.
        </p>

      </motion.div>

      {/* Cards */}

      <div className="relative z-10 grid md:grid-cols-3 gap-8">

        {freelancers.map((freelancer, index) => {

          const colors =
            colorClasses[
              freelancer.color as keyof typeof colorClasses
            ];

          return (
            <motion.div
              key={freelancer.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -14,
                scale: 1.03,
              }}
              className={`group relative bg-white/10 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 text-center hover:${colors.border} transition-all duration-300 overflow-hidden`}
            >

              {/* Glow */}

              <div
                className={`absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 ${colors.glow} opacity-0 group-hover:opacity-20 blur-3xl transition duration-500`}
              />

              {/* Badge */}

              <div className="absolute top-5 right-5 text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                {freelancer.badge}
              </div>

              {/* Avatar */}

              <div className="relative mx-auto w-28 h-28 flex items-center justify-center">

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                 
