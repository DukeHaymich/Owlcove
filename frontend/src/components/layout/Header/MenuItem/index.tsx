<<<<<<< Updated upstream
import { IMenuItem } from '@/utils/type/header';
=======
import { MenuItem as IMenuItem } from '@/utils/type/header';
>>>>>>> Stashed changes
import MenuGroup from './MenuGroup';
import MenuLink from './MenuLink';

type IMenuItemProps = IMenuItem & {
  isPrimary?: boolean;
};

export default function MenuItem(props: IMenuItemProps) {
  return 'children' in props ? <MenuGroup {...props} /> : <MenuLink {...props} />;
}
