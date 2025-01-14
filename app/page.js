import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-sans">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">CPRG 306: Web Development 2 - Assignments</h1>

      {/* Link to the week-2 page */}
      <Link
        href="/week-2"
        className="text-blue-500 text-xl hover:underline"
      >
        Go to Week 2 Assignments
      </Link>
    </div>
  );
}
