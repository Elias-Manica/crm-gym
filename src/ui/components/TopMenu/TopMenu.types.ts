export type MenuItemType = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

export type MenuLinkTypes = {
  listMenuItems: MenuItemType[];
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
};
