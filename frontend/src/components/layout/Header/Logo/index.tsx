import Logo from '@/components/ui/Logo';

interface IMainLogoProps {
  orientation: 'horizontal' | 'vertical';
}

export default function MainLogo({ orientation }: IMainLogoProps) {
  return (
    <div className='w-fit self-start'>
      <div className='mx-auto max-w-fit translate-y-9 rounded-b-[90%] bg-beige px-4'>
        <Logo
          orientation={orientation}
          size='medium'
          className='-translate-y-5'
        />
      </div>
    </div>
  );
}
