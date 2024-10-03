import Logo from '@/components/ui/Logo';
import { footerData } from '@/data/footer';
import MenuLocation from './MenuLocation';
import MenuMedia from './MenuMedia';

export default function Footer() {
  const { locations, media } = footerData;
  return (
    <footer className='bg-jasmine pb-5 font-label text-primary'>
      <div className='grid grid-flow-col grid-cols-2 py-20 content-view-box'>
        <div className='flex w-full flex-col justify-between'>
          <Logo
            orientation='horizontal'
            size='large'
            className='mx-auto mt-7'
          />
          <div className='mx-auto w-fit'>
            <p className='mb-1'>Hoặc liên hệ với chúng tôi qua:</p>
            <MenuMedia data={media} />
          </div>
        </div>
        <div>
          <MenuLocation data={locations} />
        </div>
      </div>
      <p className='bg-snow mt-5 w-full py-2 text-center align-middle text-lg text-primary'>
        2024. For demonstration purpose only
      </p>
    </footer>
  );
}
