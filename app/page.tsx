import Link from 'next/link';
import { devotionals } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl">
            Daily Devotionals
          </h1>
          <p className="mt-4 text-xl text-neutral-600">
            Moments of reflection, peace, and growth.
          </p>
        </header>

        <main>
          <div className="space-y-8">
            {devotionals.map((devotional) => (
              <article 
                key={devotional.id} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
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
                
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  <Link href={`/article/${devotional.slug}`} className="hover:text-blue-600 transition-colors">
                    {devotional.title}
                  </Link>
                </h2>
                
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {devotional.excerpt}
                </p>
                
                <Link 
                  href={`/article/${devotional.slug}`} 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read full devotional
                  <svg className="ml-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
