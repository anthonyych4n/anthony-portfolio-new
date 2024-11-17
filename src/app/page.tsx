import About from '@/components/about/about';
import Background from '@/components/background/background';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen bg-neutral-900 space-x-20 '>
      <div className='min-w-30 h-96'>
        <About />
        {/*<Animation />*/}
      </div>
      <div className='min-w-30 scroll-smooth h-96'>
        <Background />
        <Footer />
      </div>
    </div>
  );
}
