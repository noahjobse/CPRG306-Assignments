import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-sans">
      {/* cspell:ignore CPRG */}
      <h1 className="text-3xl font-bold mb-8">CPRG 306: Web Development 2 - Assignments</h1>

      <Link href="/week-2" className="text-blue-500 text-xl hover:underline mb-4">
        Go to Week 2 Assignments
      </Link>

      <Link href="/week-3" className="text-blue-500 text-xl hover:underline">
        Go to Week 3 Assignments
      </Link>
    </div>
  );
}
