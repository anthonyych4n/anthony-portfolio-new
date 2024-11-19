import About from '@/components/about/about';
import Animation from '@/components/animation/animation';
import Background from '@/components/background/background';
export default function Home() {
  return (
    <div className='flex justify-center min-h-screen bg-neutral-900'>
      <div className='w-full max-w-7xl flex relative'>
        <div className='fixed ml-[200px] w-[500px] pt-40'>
          <About />
          {<Animation />}
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
