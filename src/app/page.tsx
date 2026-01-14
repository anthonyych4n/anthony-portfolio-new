"use client"
import About from '@/components/about/about';
import Animation from '@/components/animation/animation';
import Background from '@/components/background/background';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-neutral-900'>
        <svg className='animate-spin h-16 w-16' viewBox='0 0 800 800'>
          <circle cx="400" cy="400" fill="none"
            r="375" strokeWidth="40" stroke="#ffffff"
            strokeDasharray="1200 1400"
            strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-neutral-900'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='flex gap-24'>
          <div className='w-[420px] flex-shrink-0 sticky top-0 h-screen py-24'>
            <div className='flex flex-col'>
              <About />
              <Animation />
            </div>
          </div>
          <div className='flex-1 py-24'>
            <Background />
          </div>
        </div>
      </div>
    </div>
  );
}
