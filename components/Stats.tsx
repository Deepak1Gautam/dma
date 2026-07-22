"use client";

import {
  Users,
  Briefcase,
  GraduationCap,
  Building2,
} from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10000,
    display: "10K+",
    label: "Students",
    icon: Users,
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500",
  },
  {
    value: 2500,
    display: "2500+",
    label: "Projects",
    icon: Briefcase,
    iconColor: "text-green-400",
    borderColor: "hover:border-green-500",
  },
  {
    value: 500,
    display: "500+",
    label: "Tutors",
    icon: GraduationCap,
    iconColor: "text-yellow-400",
    borderColor: "hover:border-yellow-500",
  },
  {
    value: 100,
    display: "100+",
    label: "Colleges",
    icon: Building2,
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500",
  },
];

function AnimatedNumber({
  value,
  display,
}: {
  value: number;
  display: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  if (value >= 10000) {
    return (
      <span ref={ref}>
        {count >= 10000 ? display : `${Math.floor(count / 1000)}K+`}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {count >= value ? display : `${count}+`}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative max-w-7xl mx-auto px-8 py-20 overflow-hidden">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
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
        DMA in Numbers 🚀
      </motion.h2>

      {/* Stats */}

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 50,
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
                scale: 1.08,
                y: -8,
              }}
              className={`bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-gray-800 ${stat.borderColor} transition-all duration-300`}
            >

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <Icon
                  className={`mx-auto ${stat.iconColor}`}
                  size={42}
                />
              </motion.div>

              {/* Number */}

              <h2 className="text-4xl font-bold mt-4">
                <AnimatedNumber
                  value={stat.value}
                  display={stat.display}
                />
              </h2>

              {/* Label */}

              <p className="text-gray-400 mt-2">
                {stat.label}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
