import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-5 bg-black/70 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">

      {/* Logo */}
      <Link
        href="/"
        className="text-4xl font-extrabold text-blue-500 tracking-wider"
      >
        DMA
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-8 text-sm font-medium">

        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>

        <Link href="/find-work" className="hover:text-blue-400 transition">
          Find Work
        </Link>

        <Link href="/hire-students" className="hover:text-blue-400 transition">
          Hire Students
        </Link>

        <Link href="/dashboard" className="hover:text-blue-400 transition">
          Dashboard
        </Link>

        <Link href="/profile" className="hover:text-blue-400 transition">
  Profile
</Link>

        <Link href="/login" className="hover:text-blue-400 transition">
          Login
        </Link>

        <Link
          href="/signup"
          className="bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>

      </div>

    </nav>
  );
}