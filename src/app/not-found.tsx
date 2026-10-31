import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="reader" tabIndex={-1}>
      <header className="lesson-header">
        <h1>Lesson not found</h1>
        <p className="lesson-meta">404</p>
      </header>
      <div className="lesson-body">
        <p>
          This page doesn’t exist. Choose a lesson from the contents or{' '}
          <Link href="/" className="inline-link">
            start at the beginning
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
