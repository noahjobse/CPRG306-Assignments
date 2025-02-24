import Link from "next/link";

// Home page component with navigation to assignment weeks
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#FFF7F1]">
      {/* Main Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      {/* Bento Box Layout */}
      <div className="grid grid-cols-2 gap-4 max-w-lg">
        <Link
          href="/week-2"
          className="col-span-1 flex items-center justify-center p-6 rounded-2xl shadow-lg bg-[#A7C7E7] text-gray-800 text-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          Week 2 Assignment
        </Link>

        <Link
          href="/week-3"
          className="col-span-1 flex items-center justify-center p-6 rounded-2xl shadow-lg bg-[#A8E6CF] text-gray-800 text-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          Week 3 Assignment
        </Link>

        <Link
          href="/week-4"
          className="col-span-2 flex items-center justify-center p-8 rounded-2xl shadow-lg bg-[#D4A5FF] text-gray-800 text-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          Week 4 Assignment
        </Link>

        <Link
          href="/week-5"
          className="col-span-2 flex items-center justify-center p-8 rounded-2xl shadow-lg bg-[#D4A5FF] text-gray-800 text-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          Week 5 Assignment
        </Link>
      </div>
    </div>
  );
}
