import Link from 'next/link';
import { devotionals } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
          Moments of reflection, <br className="hidden sm:block" /> peace, and growth.
        </h1>
        <p className="text-lg sm:text-xl text-[#57534E] dark:text-[#A8A29E] leading-relaxed font-sans font-light">
          A curated collection of thoughts and meditations designed to ground you in truth and encourage your spirit.
        </p>
      </header>

      <section>
        <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-[#9A3412] dark:text-[#FDBA74] mb-8">
          Latest Entries
        </h2>
        
        <div className="divide-y divide-[#E5E2DA] dark:divide-[#2E2C29] border-t border-[#E5E2DA] dark:border-[#2E2C29]">
          {devotionals.map((devotional) => (
            <article 
              key={devotional.id} 
              className="py-10 group"
            >
              <Link href={`/article/${devotional.slug}`} className="block">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-medium group-hover:text-[#9A3412] dark:group-hover:text-[#FDBA74] transition-colors">
                    {devotional.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-sans text-[#78716C] dark:text-[#A8A29E] shrink-0">
                    <span>{devotional.topic}</span>
                    <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                    <time dateTime={devotional.date}>
                      {new Date(devotional.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
                
                <p className="text-lg text-[#57534E] dark:text-[#D6D3D1] leading-relaxed mb-6 max-w-2xl font-serif">
                  {devotional.excerpt}
                </p>
                
                <div className="inline-flex items-center text-sm font-sans font-medium text-[#9A3412] dark:text-[#FDBA74] group-hover:opacity-80 transition-opacity">
                  Read reflection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
