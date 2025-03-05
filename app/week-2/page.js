import Link from "next/link";
import "../globals.css";

/**
 * StudentInfo Component
 *
 * Displays student information for the Week 2 Assignments page.
 * Includes:
 * - Student name with a link to the homepage.
 * - A link to the student's GitHub repository.
 * - A navigation button to return to the homepage.
 */
const StudentInfo = () => {
  const githubUrl = "https://github.com/ognoah17";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100">
      {/* Student Header Section */}
      <h2 className="text-4xl font-serif tracking-wide text-gray-900 mb-8 text-center">
        <Link href="/">Noah Jobse</Link>
      </h2>

      {/* Content Section: GitHub Link and Navigation */}
      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        {/* GitHub Repository Link */}
        <Link
          href={githubUrl}
          className="col-span-1 flex items-center justify-center p-6 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Link to GitHub Repository
        </Link>

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
};

export default StudentInfo;
