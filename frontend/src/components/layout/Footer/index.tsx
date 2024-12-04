import Logo from '@/components/ui/Logo';
import MenuLocation from './MenuLocation';
import MenuMedia from './MenuMedia';

export default function Footer() {
  return (
    <footer className='bg-cream-300 pb-5 font-sans text-primary'>
      <div className='grid grid-flow-col grid-cols-2 py-20 content-view-box'>
        <div className='flex w-full flex-col justify-between'>
          <Logo
            orientation='horizontal'
            size='large'
            className='mx-auto mt-7'
          />
          <div className='mx-auto w-fit'>
            <p className='mb-1'>Hoặc liên hệ với chúng tôi qua:</p>
            <MenuMedia />
          </div>
        </div>
        <div>
          <MenuLocation />
        </div>
      </div>
      <p className='mt-5 w-full bg-cream-200 py-2 text-center align-middle text-lg text-primary'>
        2024. For demonstration purpose only
      </p>
    </footer>
  );
}
