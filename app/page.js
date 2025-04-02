import Link from "next/link";

// Home page component with navigation to assignment weeks
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100">
      {/* Main Header */}
      <h1 className="text-4xl font-serif tracking-wide text-gray-900 mb-8 text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      {/* Refined Bento Box Layout */}
      <div className="grid grid-cols-2 gap-6 max-w-3xl">
        <Link
          href="/week-2"
          className="col-span-1 flex items-center justify-center p-6 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 2 Assignment
        </Link>

        <Link
          href="/week-3"
          className="col-span-1 flex items-center justify-center p-6 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 3 Assignment
        </Link>

        <Link
          href="/week-4"
          className="col-span-2 flex items-center justify-center p-8 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 4 Assignment
        </Link>

        <Link
          href="/week-5"
          className="col-span-2 flex items-center justify-center p-8 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 5 Assignment
        </Link>

        <Link
          href="/week-6"
          className="col-span-2 flex items-center justify-center p-8 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 6 Assignment
        </Link>

        <Link
          href="/week-7"
          className="col-span-2 flex items-center justify-center p-8 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 7 Assignment
        </Link>

        <Link
          href="/week-8"
          className="col-span-2 flex items-center justify-center p-8 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 8 Assignment
        </Link>

        <Link
          href="/week-9"
          className="col-span-2 flex items-center justify-center p-8 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 9 Assignment
        </Link>

        <Link
          href="/week-10"
          className="col-span-2 flex items-center justify-center p-8 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Week 10 Assignment
        </Link>
      </div>
    </div>
  );
}
