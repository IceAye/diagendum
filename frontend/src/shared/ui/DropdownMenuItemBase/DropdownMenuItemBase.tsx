import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { type ComponentRef, forwardRef, type ReactNode } from 'react';
import type { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import { NavLink } from 'react-router-dom';

interface DropdownMenuItemBaseProps {
  href?: string;
  pageTitle: string;
  children?: ReactNode;
}

type CombinedProps = DropdownMenuItemProps & DropdownMenuItemBaseProps;

export const DropdownMenuItemBase = forwardRef<
  ComponentRef<typeof DropdownMenu.Item>,
  CombinedProps
>(({ pageTitle, href, children, ...props }, forwardedRef) => {
  const itemStyles =
    'block w-full cursor-pointer p-2 rounded-md hover:bg-gray-100 outline-none transition-colors duration-150';

  console.log(children);

  return (
    <DropdownMenu.Item className={itemStyles} {...props} ref={forwardedRef} asChild>
      {children ?? <NavLink to={href}>{pageTitle}</NavLink>}
    </DropdownMenu.Item>
  );
});

DropdownMenuItemBase.displayName = 'DropdownMenuItemBase';
