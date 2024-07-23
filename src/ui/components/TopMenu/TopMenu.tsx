'use client';

import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from '@nextui-org/react';

import type { MenuItemType, MenuLinkTypes } from './TopMenu.types';

import { ClientsIcon, GearIcon, HomeIcon } from '@/ui';

const MENU_ITEMS: MenuItemType[] = [
  { name: 'Página inicial', href: '#', icon: <HomeIcon /> },
  { name: 'Alunos', href: '#', icon: <ClientsIcon /> },
  { name: 'Configurações', href: '#', icon: <GearIcon /> },
];

const Brand = () => (
  <NavbarBrand>
    <Image
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFuLdsnjpYU5P1yoeJ_k8XZaMgKWMFe8SLA&s'
      width='30px'
    />
    <p className='font-bold text-inherit ml-1'>Artes Livres</p>
  </NavbarBrand>
);

const MenuLinks = ({
  listMenuItems,
  activeItem,
  setActiveItem,
}: MenuLinkTypes) => {
  return (
    <>
      {listMenuItems?.map((item, index) => (
        <NavbarItem
          key={`${item.name}-${index}`}
          isActive={item.name === activeItem}
          className='flex items-center'
        >
          <Link
            color='foreground'
            href={item.href}
            onClick={() => setActiveItem(item.name)}
          >
            <div className='flex gap-1'>
              {item?.icon || null}
              {item.name}
            </div>
          </Link>
        </NavbarItem>
      ))}
    </>
  );
};

const TopMenu = () => {
  const [activeItem, setActiveItem] = React.useState('Página inicial');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle className='sm:hidden' />
        <Brand />
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <MenuLinks
          listMenuItems={MENU_ITEMS}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='#'
            variant='light'
            className='text-black'
          >
            Desconectar
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {MENU_ITEMS.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            isActive={item.name === activeItem}
          >
            <Link
              className='w-full'
              size='lg'
              color='foreground'
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }}
            >
              <div className='flex gap-1'>
                {item?.icon || null}
                {item.name}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export { TopMenu };
