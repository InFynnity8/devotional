import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDevotionalBySlug, devotionals } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

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
    <article className="max-w-2xl mx-auto">
      <Link 
        href="/"
        className="inline-flex items-center text-sm font-sans font-medium text-[#78716C] dark:text-[#A8A29E] hover:text-[#2C2A25] dark:hover:text-[#E6E4DD] mb-12 transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Return to journal
      </Link>

      <header className="mb-12 sm:mb-16">
        <div className="flex items-center gap-4 text-sm font-sans font-medium text-[#9A3412] dark:text-[#FDBA74] uppercase tracking-widest mb-6">
          <span>{devotional.topic}</span>
          <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
          <time dateTime={devotional.date} className="text-[#78716C] dark:text-[#A8A29E]">
            {new Date(devotional.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
          {devotional.title}
        </h1>
        
        <p className="text-xl sm:text-2xl text-[#57534E] dark:text-[#D6D3D1] italic leading-relaxed">
          {devotional.excerpt}
        </p>
      </header>

      <div className="prose prose-lg sm:prose-xl prose-stone dark:prose-invert max-w-none font-serif leading-relaxed text-[#2C2A25] dark:text-[#E6E4DD] marker:text-[#9A3412] dark:marker:text-[#FDBA74]">
        {devotional.content.split('\n\n').map((paragraph, index) => {
          // Add a drop cap to the first paragraph for an editorial feel
          if (index === 0) {
            return (
              <p key={index} className="first-letter:float-left first-letter:text-6xl first-letter:pr-4 first-letter:font-medium first-letter:text-[#9A3412] dark:first-letter:text-[#FDBA74] first-line:uppercase first-line:tracking-widest">
                {paragraph}
              </p>
            );
          }
          return (
            <p key={index}>
              {paragraph}
            </p>
          );
        })}
      </div>
      
      <hr className="my-16 border-[#E5E2DA] dark:border-[#2E2C29]" />
      
      <div className="text-center pb-8">
        <p className="font-sans text-sm text-[#78716C] dark:text-[#A8A29E]">
          Thank you for reading today's reflection.
        </p>
      </div>
    </article>
  );
}
