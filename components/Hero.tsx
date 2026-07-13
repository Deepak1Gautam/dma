import { Search, Briefcase, Star, Laptop, GraduationCap, Palette } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">

      {/* Left */}
      <div className="flex-1">

        <p className="text-blue-400 font-semibold mb-3">
          🚀 India's Largest Student Marketplace
        </p>

        <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
          Earn.
          <br />
          Learn.
          <br />
          Teach.
          <br />
          Create.
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-xl">
          DMA connects talented students with students who need help.
          Earn money, find tutors, hire creators and grow together.
        </p>

        <div className="flex items-center gap-2 mt-6 text-yellow-400">
          <Star fill="currentColor" size={18}/>
          <Star fill="currentColor" size={18}/>
          <Star fill="currentColor" size={18}/>
          <Star fill="currentColor" size={18}/>
          <Star fill="currentColor" size={18}/>
          <span className="text-gray-300 ml-2">
            Trusted by 5000+ Students
          </span>
        </div>

        <div className="flex gap-5 mt-8">

          <button className="flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
            <Search size={20}/>
            Find Work
          </button>

          <button className="flex items-center gap-2 border border-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition">
            <Briefcase size={20}/>
            Hire Students
          </button>

        </div>

      </div>

      {/* Right */}

      <div className="flex-1 flex justify-center">

        <div className="relative w-[500px] h-[500px]">

          {/* Glow */}
          <div className="absolute w-80 h-80 bg-blue-600 blur-[120px] opacity-30 rounded-full top-20 left-20"></div>

          {/* Laptop */}
          <div className="absolute top-24 left-20 bg-white/10 backdrop-blur-md border border-gray-700 rounded-3xl w-72 h-48 flex flex-col items-center justify-center">

            <Laptop size={70} className="text-blue-400"/>

            <p className="mt-4 font-bold">
              DMA Platform
            </p>

          </div>

          {/* Floating Card 1 */}

          <div className="absolute top-5 right-0 bg-blue-600 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">

            <GraduationCap/>

            <div>

              <h4 className="font-bold">
                Tutor
              </h4>

              <p className="text-sm">
                ₹500/hr
              </p>

            </div>

          </div>

          {/* Floating Card 2 */}

          <div className="absolute bottom-8 left-0 bg-pink-600 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">

            <Palette/>

            <div>

              <h4 className="font-bold">
                Artist
              </h4>

              <p className="text-sm">
                Commission Open
              </p>

            </div>

          </div>

          {/* Floating Card 3 */}

          <div className="absolute bottom-0 right-10 bg-green-600 rounded-2xl px-5 py-4 shadow-xl">

            💰 Earn Money

          </div>

        </div>

      </div>

    </section>
  );
}