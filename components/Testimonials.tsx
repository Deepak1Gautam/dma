"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "DMA helped me earn my first ₹10,000 through freelancing while studying.",
    name: "Aman Sharma",
    role: "Student Freelancer",
  },
  {
    text: "The tutoring feature made learning much easier from senior students.",
    name: "Priya Verma",
    role: "Student Learner",
  },
  {
    text: "Finding student developers for my project became simple with DMA.",
    name: "Rohan Gupta",
    role: "Project Client",
  },
];

export default function Testimonials() {
  return (
    <section className="relative max-w-7xl mx-auto px-8 py-20 overflow-hidden">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Heading */}

      <motion.h2
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
        className="relative z-10 text-4xl font-bold text-center mb-12"
      >
        What Students Say 💬
      </motion.h2>

      {/* Testimonials */}

      <div className="relative z-10 grid md:grid-cols-3 gap-8">

        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
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
              y: -12,
              scale: 1.03,
            }}
            className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-blue-500/60 transition-all duration-300 overflow-hidden"
          >

            {/* Quote Icon */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className="absolute top-5 right-6 text-blue-500/30"
            >
              <Quote size={42} />
            </motion.div>

            {/* Stars */}

            <div className="flex text-yellow-400 mb-4">

              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.15 + star * 0.08,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                  }}
                >
                  <Star
                    size={20}
                    fill="currentColor"
                  />
                </motion.div>
              ))}

            </div>

            {/* Testimonial */}

            <p className="relative z-10 text-gray-300 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* User */}

            <div className="mt-6 flex items-center gap-3">

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold"
              >
                {testimonial.name.charAt(0)}
              </motion.div>

              <div>

                <h3 className="font-bold text-blue-400">
                  — {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>

              </div>

            </div>

            {/* Hover Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

          </motion.div>
        ))}

      </div>

    </section>
  );
}
