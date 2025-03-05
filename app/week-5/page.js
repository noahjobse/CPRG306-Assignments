"use client";

import NewItem from "./NewItem";
import Link from "next/link";

/**
 * Page Component
 *
 * Renders the Week 4 Assignments page, which includes:
 * - A page header
 * - A form for adding new shopping list items (NewItem component)
 * - A navigation link back to the homepage
 */
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100">
      {/* Page Header Section */}
      <h1 className="text-4xl font-serif tracking-wide text-gray-900 mb-8 text-center">
        Shopping List
      </h1>

      {/* Content Section: New Item Form and Navigation */}
      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        <NewItem />

        {/* Navigation Section */}
        <Link
          href="/"
          className="col-span-1 flex items-center justify-center p-6 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
