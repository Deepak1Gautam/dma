"use client";

import {
  UserPlus,
  BriefcaseBusiness,
  Wallet,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Profile",
    description: "Signup and showcase your skills.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Get Work",
    description: "Receive projects from students.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Earn Money",
    description: "Complete work and get paid.",
    icon: Wallet,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative max-w-7xl mx-auto py-20 px-8 overflow-hidden">

      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-4xl font-bold text-center mb-14"
      >
        How DMA Works
      </motion.h2>

      {/* Steps */}

      <div className="relative z-10 grid md:grid-cols-3 gap-8">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
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
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-gray-800 hover:border-blue-500/60 transition-all duration-300"
            >

              {/* Number */}

              <motion.h1
                whileHover={{
                  scale: 1.15,
                }}
                className="text-6xl font-bold text-blue-400"
              >
                {step.number}
              </motion.h1>

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="flex justify-center mt-4"
              >
                <Icon
                  size={38}
                  className="text-purple-400"
                />
              </motion.div>

              {/* Content */}

              <h3 className="text-2xl font-bold mt-4">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {step.description}
              </p>

              {/* Connector */}

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.2,
                  }}
                  className="hidden md:block absolute top-1/2 -right-16 w-16 h-[2px] bg-blue-500/50"
                >
                  <ArrowRight
                    size={18}
                    className="absolute -right-2 -top-2 text-blue-400"
                  />
                </motion.div>
              )}

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
