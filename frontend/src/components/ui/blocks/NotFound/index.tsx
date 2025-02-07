import { Button } from '@/components/common/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Image404 from '@/public/images/404.png';

export default function NotFound() {
  return (
    <section className='bg-cream-100 pb-28 pt-36 content-view-box'>
      <Image
        src={Image404}
        alt='404'
        className='mx-auto block h-auto max-h-64 w-auto max-w-64'
      />
      <h1 className='mb-10 mt-5 text-center font-serif text-primary text-heading'>
        Rất tiếc, trang bạn tìm kiếm không tồn tại!
      </h1>
      <div className='text-center'>
        <Button
          size='lg'
          className='rounded-md'
          asChild>
          <Link href='/'>Về trang chủ</Link>
        </Button>
      </div>
    </section>
  );
}
