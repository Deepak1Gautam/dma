"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Find Work",
    href: "/find-work",
  },
  {
    name: "Hire Students",
    href: "/hire-students",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Profile",
    href: "/profile",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800"
    >

      <div className="flex justify-between items-center px-6 md:px-12 py-5">

        {/* Logo */}

        <Link
          href="/"
          className="relative text-4xl font-extrabold text-blue-500 tracking-wider"
        >
          <motion.span
            whileHover={{
              scale: 1.08,
            }}
            className="inline-block"
          >
            DMA
          </motion.span>

          <motion.div
            animate={{
              x: [0, 70, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -top-2 -right-4"
          >
            <Sparkles
              size={16}
              className="text-blue-400"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group hover:text-blue-400 transition"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Login */}

          <Link
            href="/login"
            className="hover:text-blue-400 transition"
          >
            Login
          </Link>

          {/* Sign Up */}

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href="/signup"
              className="bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </motion.div>

        </div>

        {/* Mobile Menu Button */}

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </motion.button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="lg:hidden overflow-hidden border-t border-gray-800"
          >

            <div className="flex flex-col px-6 py-6 gap-5">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-blue-400 transition"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 px-5 py-3 rounded-xl text-center hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.nav>
  );
}
