"use client";

import {
  GraduationCap,
  Palette,
  CodeXml,
  MessageCircle,
  Users,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: CodeXml,
    title: "Freelancing",
    description: "Coding, PPT, Design & Projects.",
  },
  {
    icon: GraduationCap,
    title: "Tutoring",
    description: "Learn from talented students.",
  },
  {
    icon: Palette,
    title: "Art Commission",
    description: "Hire artists for creative work.",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Talk directly with clients.",
  },
  {
    icon: Users,
    title: "Campus Community",
    description: "College groups and discussions.",
  },
  {
    icon: MapPin,
    title: "Nearby Students",
    description: "Find students near your campus.",
  },
];

export default function Features() {
  return (
    <section className="relative px-8 py-20 max-w-7xl mx-auto">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-4xl font-bold text-center mb-12"
      >
        Everything Students Need
      </motion.h2>

      {/* Cards */}

      <div className="relative z-10 grid md:grid-cols-3 gap-8">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,
              }}
              className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 hover:border-blue-500/60 transition-all duration-300 overflow-hidden"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Animated Icon */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative z-10 w-fit"
              >
                <Icon
                  size={40}
                  className="text-blue-400 group-hover:text-blue-300 transition"
                />
              </motion.div>

              {/* Content */}

              <div className="relative z-10">

                <h3 className="text-xl font-bold mt-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {feature.description}
                </p>

              </div>

              {/* Bottom Line */}

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
              />

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
