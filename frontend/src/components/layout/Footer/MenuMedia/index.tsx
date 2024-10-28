import { IMenuMedia } from '@/utils/type/footer';

import MediaItem from './MediaItem';

interface IMenuMediaProps {
  data: IMenuMedia[];
}

export default function MenuMedia({ data }: IMenuMediaProps) {
  return (
    <div className='mx-auto w-fit'>
      {data.map((item, index) => {
        return (
          <MediaItem
            {...item}
            key={index}
          />
        );
      })}
    </div>
  );
}
