import { AvatarBase } from '@/shared/ui/base/AvatarBase/AvatarBase.tsx';
import { DropdownMenuBase } from '@/shared/ui/base/DropdownMenuBase/DropdownMenuBase.tsx';

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
