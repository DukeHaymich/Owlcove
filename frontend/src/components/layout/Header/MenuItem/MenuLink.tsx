import { IMenuLink } from '@/utils/type/header';
import Link from 'next/link';
import React from 'react';

export default function MenuLink({ name, url }: IMenuLink) {
  return (
    <Link
      href={url}
      className='table h-10 w-full max-w-[196px] text-menu hover:bg-cream-300/95'>
      <span className='table-cell align-middle'>{name}</span>
    </Link>
  );
}
