import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About this journal' };

export default function AboutPage() {
  return (
    <main id="main-content" className="reader" tabIndex={-1}>
      <article>
        <header className="lesson-header">
          <h1>About this journal</h1>
          <p className="lesson-meta">Priyanshu Tiwari</p>
        </header>
        <div className="lesson-body">
          <section>
            <p>
              I’m Priyanshu, a software engineer in my twenties trying to
              understand fitness with the same curiosity I bring to everything
              else (and hopefully fewer open tabs).
            </p>
            <p>
              Prehab is an eight-part series about that process: my relationship
              with food, the appeal of a body-fat target, fasting, protein and
              carbs, becoming a gym regular, and making room for cardio.
            </p>
            <p>
              The format is simple: explain the terms, work through an example,
              and figure out what is useful in an ordinary week. The nutrition
              and exercise explanations link to their sources. The examples
              explain the concepts; they are not a record of my measurements.
            </p>
          </section>
          <section>
            <h2>Why “prehab”?</h2>
            <p>
              A reminder to pay attention now. To learn how to eat and train in
              a way I can keep doing, while leaving enough time to actually
              enjoy being in my twenties.
            </p>
          </section>
          <p>
            <Link href="/" className="inline-link">
              Read the first lesson →
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
