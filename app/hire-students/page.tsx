export default function HireStudents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">

      <h1 className="text-5xl font-bold text-blue-400 mb-8">
        Hire Students
      </h1>

      <div className="max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-gray-700">

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Project Title"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
          />

          <textarea
            placeholder="Project Description"
            rows={5}
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
          />

          <input
            type="text"
            placeholder="Budget (₹)"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-bold transition">
            Post Project
          </button>

        </div>

      </div>

    </div>
  );
}