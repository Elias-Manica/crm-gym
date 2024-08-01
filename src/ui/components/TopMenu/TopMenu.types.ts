import { IconType } from 'react-icons';

export type MenuItemType = {
  name: string;
  href: string;
  icon?: IconType;
};

export type MenuLinkTypes = {
  listMenuItems: MenuItemType[];
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
};
