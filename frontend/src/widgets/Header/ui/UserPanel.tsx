import { UserMotto } from '@/widgets/Header/ui/UserMotto.tsx';
import { Username } from '@/widgets/Header/ui/Username.tsx';
import { ProfileMenu } from '@/widgets/Header/ui/ProfileMenu.tsx';

export const UserPanel = () => {
  return (
    <>
      <UserMotto />
      <div className='flex items-center justify-end space-x-4'>
        <Username />
        <ProfileMenu />
      </div>
    </>
  );
};
