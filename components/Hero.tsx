"use client";

import {
  Search,
  Briefcase,
  Star,
  Laptop,
  GraduationCap,
  Palette,
  Sparkles,
  Code2,
  BookOpen,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden">

      {/* Animated Background Orbs */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"
      />

      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative z-10"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-400 font-semibold mb-3 flex items-center gap-2"
        >
          <Sparkles size={18} />
          India's Largest Student Marketplace
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          Earn.
          <br />

          <span className="text-blue-500">
            Learn.
          </span>

          <br />

          Teach.
          <br />

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Create.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg mt-6 max-w-xl"
        >
          DMA connects talented students with students who need help.
          Earn money, find tutors, hire creators and grow together.
        </motion.p>

        {/* Rating */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 mt-6 text-yellow-400"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.8 + star * 0.1,
                type: "spring",
              }}
            >
              <Star fill="currentColor" size={18} />
            </motion.div>
          ))}

          <span className="text-gray-300 ml-2">
            Trusted by 5000+ Students
          </span>
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex gap-5 mt-8"
        >

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(37,99,235,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            <Search size={20} />
            Find Work
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2563eb",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-blue-500 px-8 py-4 rounded-xl font-semibold transition"
          >
            <Briefcase size={20} />
            Hire Students
          </motion.button>

        </motion.div>

      </motion.div>


      {/* RIGHT ANIMATED VISUAL */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center relative z-10"
      >

        <div className="relative w-[500px] h-[500px]">

          {/* Rotating Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-10 border border-blue-500/20 rounded-full"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-20 border border-purple-500/20 rounded-full"
          />

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute w-80 h-80 bg-blue-600 blur-[120px] rounded-full top-20 left-20"
          />

          {/* Floating Code Icon */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-16 left-5 bg-gray-900/80 border border-gray-700 p-4 rounded-2xl shadow-xl"
          >
            <Code2 className="text-blue-400" size={28} />
          </motion.div>

          {/* Floating Book Icon */}

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute top-32 right-5 bg-gray-900/80 border border-gray-700 p-4 rounded-2xl shadow-xl"
          >
            <BookOpen className="text-purple-400" size={28} />
          </motion.div>

          {/* Laptop */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute top-24 left-20 bg-white/10 backdrop-blur-xl border border-gray-700 rounded-3xl w-72 h-48 flex flex-col items-center justify-center shadow-2xl"
          >

            <Laptop
              size={70}
              className="text-blue-400"
            />

            <p className="mt-4 font-bold">
              DMA Platform
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Learn • Build • Earn
            </p>

          </motion.div>


          {/* Tutor Card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            whileHover={{ scale: 1.08 }}
            className="absolute top-5 right-0 bg-blue-600 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
          >

            <GraduationCap />

            <div>
              <h4 className="font-bold">
                Tutor
              </h4>

              <p className="text-sm">
                ₹500/hr
              </p>
            </div>

          </motion.div>


          {/* Artist Card */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
            whileHover={{ scale: 1.08 }}
            className="absolute bottom-8 left-0 bg-pink-600 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
          >

            <Palette />

            <div>
              <h4 className="font-bold">
                Artist
              </h4>

              <p className="text-sm">
                Commission Open
              </p>
            </div>

          </motion.div>


          {/* Earnings Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1.5,
            }}
            whileHover={{ scale: 1.08 }}
            className="absolute bottom-0 right-10 bg-green-600 rounded-2xl px-5 py-4 shadow-xl"
          >
            💰 Earn Money
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}
