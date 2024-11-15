import About from '@/components/about/about';
import Animation from '@/components/animation/animation';
import Background from '@/components/background/background';


export default function Home() {
  return (
    <div className='flex'>
      <div className=''>
        <About />
        <Animation />
      </div>
      <div>
        <Background />

      </div>
    </div>
  );
}
