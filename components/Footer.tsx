"use client";

import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

import { motion } from "framer-motion";

const footerLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Marketplace",
    href: "/find-work",
  },
  {
    name: "Tutors",
    href: "/find-work",
  },
  {
    name: "Community",
    href: "/",
  },
  {
    name: "Contact",
    href: "mailto:hello@dma.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 mt-20 overflow-hidden">

      {/* Animated Top Line */}

      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

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
        className="absolute left-1/2 -translate-x-1/2 -bottom-40 w-96 h-96 bg-blue-600 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Main Footer */}

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
        className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center"
      >

        {/* Brand */}

        <div className="text-center md:text-left">

          <motion.h2
            whileHover={{
              scale: 1.08,
            }}
            className="text-3xl font-bold text-blue-400"
          >
            DMA
          </motion.h2>

          <p className="text-gray-400 mt-2">
            Do More. Achieve More.
          </p>

        </div>

        {/* Links */}

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-6 md:mt-0 text-gray-300">

          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-blue-400 transition"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

        </div>

        {/* Social Icons */}

        <div className="flex gap-4 mt-6 md:mt-0">

          <motion.a
            whileHover={{
              scale: 1.15,
              y: -4,
            }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github size={20} />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.15,
              y: -4,
            }}
            href="#"
            className="text-gray-400 hover:text-pink-400 transition"
          >
            <Instagram size={20} />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.15,
              y: -4,
            }}
            href="#"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.15,
              y: -4,
            }}
            href="mailto:hello@dma.com"
            className="text-gray-400 hover:text-green-400 transition"
          >
            <Mail size={20} />
          </motion.a>

        </div>

      </motion.div>

      {/* Bottom */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="relative z-10 text-center text-gray-500 pb-8"
      >
        © 2026 DMA. All Rights Reserved.
      </motion.div>

      {/* Back To Top */}

      <motion.button
        whileHover={{
          y: -5,
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="absolute bottom-7 right-8 z-20 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp size={18} />
      </motion.button>

    </footer>
  );
}
