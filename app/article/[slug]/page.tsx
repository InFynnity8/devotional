import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDevotionalBySlug, devotionals } from '@/lib/data';

// This is required for static site generation with dynamic routes in Next.js App Router
export async function generateStaticParams() {
  return devotionals.map((devotional) => ({
    slug: devotional.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const devotional = getDevotionalBySlug(resolvedParams.slug);

  if (!devotional) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to all topics
        </Link>

        <article className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-neutral-100">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {devotional.topic}
              </span>
              <time dateTime={devotional.date} className="text-sm text-neutral-500">
                {new Date(devotional.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
              {devotional.title}
            </h1>
            <p className="text-xl text-neutral-500 italic">
              {devotional.excerpt}
            </p>
          </header>

          <div className="prose prose-lg prose-neutral max-w-none">
            {devotional.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
