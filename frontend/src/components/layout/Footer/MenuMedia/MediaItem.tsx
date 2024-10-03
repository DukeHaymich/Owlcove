import { IMenuMedia } from '@/utils/type/footer';
import React from 'react';

import FacebookIcon from '@/public/images/svg/facebook.svg';
import ZaloIcon from '@/public/images/svg/zalo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function MediaItem({ name, url }: IMenuMedia) {
  let icon;
  switch (name) {
    case 'Facebook': {
      icon = FacebookIcon;
      break;
    }
    case 'Zalo': {
      icon = ZaloIcon;
      break;
    }
    default: {
      icon = FacebookIcon;
      break;
    }
  }
  return (
    <Link
      href={url}
      className=''>
      <Image
        className='inline'
        width={42}
        src={icon}
        alt={name}
      />
    </Link>
  );
}
