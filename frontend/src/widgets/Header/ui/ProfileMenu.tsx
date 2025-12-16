import { AvatarBase } from '@/shared/ui/AvatarBase/AvatarBase.tsx';
import { DropdownMenuBase } from '@/shared/ui/DropdownMenuBase/DropdownMenuBase.tsx';

export const ProfileMenu = () => {
  return (
    <div>
      <div className='flex'>
        <AvatarBase />
        <DropdownMenuBase />
      </div>
    </div>
  );
};
