import About from '@/components/about/about';
import Animation from '@/components/animation/animation';
import Background from '@/components/background/background';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen bg-neutral-900 gap-30'>
      <div className=''>
        <About />
        <Animation />
      </div>
      <div className=''>
        <Background />
        <Footer />
      </div>
    </div>
  );
}
