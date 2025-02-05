'use client';

import { useState } from 'react';

import { IMenuGroup } from '@/utils/type/header';
import clsx from 'clsx';
import Link from 'next/link';
import MenuItem from '.';

interface IMenuGroupProps extends IMenuGroup {
  isPrimary?: boolean;
}

export default function MenuGroup({ name, children, url = '', isPrimary = true }: IMenuGroupProps) {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const Container = url.length > 0 ? Link : 'div';
  return (
    <div
      className='relative h-10 w-full max-w-[196px] cursor-pointer text-menu hover:bg-cream-300/95'
      onMouseEnter={() => setShowSubMenu(true)}
      onMouseLeave={() => setShowSubMenu(false)}>
      <Container
        href={url}
        className='table h-full w-full'>
        <span className='table-cell align-middle'>{name}</span>
      </Container>
      <div
        className={clsx(
          'absolute h-fit pt-3',
          showSubMenu ? '' : 'hidden',
          isPrimary ? 'top-full' : '-top-3 left-full pl-1'
        )}>
        <div className='w-[196px] rounded-md bg-cream-200/95 first:*:rounded-t-md last:*:rounded-b-md'>
          {children.map((item, index) => {
            return (
              <MenuItem
                key={index}
                {...item}
                url={item.url || ''}
                isPrimary={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
