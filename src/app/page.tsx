import About from '@/components/about/about';
import Background from '@/components/background/background';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen bg-neutral-900 space-x-20 '>
      <div className='min-w-30 h-[70%]'>
        <About />
        {/*<Animation />*/}
      </div>
      <div className='min-w-30 scroll-smooth h-[70%] space-y-20'>
        <Background />
        <Footer />
      </div>
    </div>
  );
}
