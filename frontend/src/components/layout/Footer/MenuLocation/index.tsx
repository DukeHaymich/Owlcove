import { IContactItem } from '@/utils/type/footer';
import ContactItem from './ContactItem';

interface IMenuLocationProps {
  data: IContactItem[];
}

export default function MenuLocation({ data }: IMenuLocationProps) {
  return (
    <>
      {data.map((item, index) => {
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
