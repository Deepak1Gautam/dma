export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-14">
        How DMA Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/10 rounded-2xl p-8 text-center">
          <h1 className="text-6xl font-bold text-blue-400">1</h1>
          <h3 className="text-2xl font-bold mt-4">Create Profile</h3>
          <p className="text-gray-400 mt-3">
            Signup and showcase your skills.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 text-center">
          <h1 className="text-6xl font-bold text-blue-400">2</h1>
          <h3 className="text-2xl font-bold mt-4">Get Work</h3>
          <p className="text-gray-400 mt-3">
            Receive projects from students.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 text-center">
          <h1 className="text-6xl font-bold text-blue-400">3</h1>
          <h3 className="text-2xl font-bold mt-4">Earn Money</h3>
          <p className="text-gray-400 mt-3">
            Complete work and get paid.
          </p>
        </div>

      </div>
    </section>
  );
}