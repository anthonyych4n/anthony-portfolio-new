"use client"
import About from '@/components/about/about';
import Animation from '@/components/animation/animation';
import Background from '@/components/background/background';
import { useEffect, useState } from 'react';


interface Capybara {
  imageUrl: string
}

const Capybara: Capybara[] = [
  {
    imageUrl: "/images/capy.png"
  }
]

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
      <div className='flex justify-center items-center min-h-screen bg-neutral-900 space-x-5'>
        <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s] '></div>
        <div className='h-8 w-8 bg-white rounded-full animate-bounce'></div>
      </div>
    );
  }

  return (
    <div className='flex justify-center min-h-screen bg-neutral-900'>
      <div className='w-full max-w-7xl flex relative'>
        <div className='fixed ml-[200px] w-[500px] pt-40'>
          <About />
          <Animation />
        </div>
        <div className='ml-[700px] flex-1 pt-40 '>
          <div className='flex flex-col space-y-20'>
            <Background />
          </div>
        </div>
      </div>
    </div>
  );
}
