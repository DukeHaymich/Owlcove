import { IMenuMedia } from '@/utils/type/footer';

import MediaItem from './MediaItem';
import { footerData } from '@/data/footer';

export default function MenuMedia() {
  const { media } = footerData;
  return (
    <div className='mx-auto w-fit'>
      {media.map((item: IMenuMedia, index) => {
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
