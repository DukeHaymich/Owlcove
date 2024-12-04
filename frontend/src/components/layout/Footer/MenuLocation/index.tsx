import { IContactItem } from '@/utils/type/footer';
import ContactItem from './ContactItem';
import { footerData } from '@/data/footer';

export default function MenuLocation() {
  const { locations } = footerData;
  return (
    <>
      {locations.map((item: IContactItem, index) => {
        return (
          <ContactItem
            {...item}
            index={index + 1}
            key={index}
          />
        );
      })}
    </>
  );
}
