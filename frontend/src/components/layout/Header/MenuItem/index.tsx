import { MenuItem as MenuItemType } from '@/utils/type/header';
import MenuGroup from './MenuGroup';
import MenuLink from './MenuLink';

type IMenuItemProps = MenuItemType & {
  isPrimary?: boolean;
};

export default function MenuItem(props: IMenuItemProps) {
  return 'children' in props ? <MenuGroup {...props} /> : <MenuLink {...props} />;
}
