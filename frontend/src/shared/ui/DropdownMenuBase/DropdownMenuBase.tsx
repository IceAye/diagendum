import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { DropdownMenuItemBase } from '@/shared/ui/DropdownMenuItemBase/DropdownMenuItemBase.tsx';
import { Paths } from '@/shared/config/paths.ts';
import { LogOut } from '@/features/logout/ui/LogOut.tsx';
import { SwitchBase } from '@/shared/ui/SwitchBase/SwitchBase.tsx';

export const DropdownMenuBase = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <ChevronDownIcon className='w-5 h-5' />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className='bg-white w-48 z-50 text-black rounded-lg shadow-lg p-2'>
          <DropdownMenu.Arrow className='fill-white' />
          <DropdownMenuItemBase href={Paths.Profile.Root} pageTitle='Profile' />
          <DropdownMenuItemBase href={Paths.Settings.Root} pageTitle='Settings' />
          <DropdownMenuItemBase href={Paths.Search.Root} pageTitle='Search' />
          <DropdownMenuItemBase asChild pageTitle='Log out'>
            <LogOut href={Paths.Auth.Login} />
          </DropdownMenuItemBase>
          <DropdownMenu.Separator className='h-px bg-gray-200 my-1' />
          <SwitchBase />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
