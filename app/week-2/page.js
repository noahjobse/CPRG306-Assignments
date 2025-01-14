import Link from 'next/link';

const StudentInfo = () => {
  const githubUrl = 'https://github.com/ognoah17';

  return (
    <div>
      <h2>
        <Link href="/">Noah Jobse</Link>
      </h2>
      <p>
        <Link href={githubUrl}>Link to GitHub Repository</Link>
      </p>
    </div>
  );
};

export default StudentInfo;
