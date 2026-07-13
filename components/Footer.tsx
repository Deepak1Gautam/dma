export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            DMA
          </h2>

          <p className="text-gray-400 mt-2">
            Do More. Achieve More.
          </p>
        </div>

        <div className="flex gap-8 mt-6 md:mt-0 text-gray-300">

          <a href="#">Home</a>

          <a href="#">Marketplace</a>

          <a href="#">Tutors</a>

          <a href="#">Community</a>

          <a href="#">Contact</a>

        </div>

      </div>

      <div className="text-center text-gray-500 pb-8">
        © 2026 DMA. All Rights Reserved.
      </div>

    </footer>
  );
}