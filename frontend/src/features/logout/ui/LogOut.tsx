import { useNavigate } from 'react-router-dom';
import { logout } from '@/features/logout/model/logout.ts';
import { Paths } from '@/shared/config/paths.ts';
import { ExitIcon } from '@radix-ui/react-icons';

export const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(Paths.Auth.Login);
  };

  return (
    <div
      className='flex items-center justify-between px-3 py-2 text-sm text-gray-700
                  hover:bg-gray-100 rounded-md cursor-pointer
                  data-[highlighted]:bg-gray-100'
      onClick={handleLogout}
    >
      <span className='text-sm text-gray-700'>Log out</span>
      <ExitIcon className='w-4 h-4 text-gray-600' />
    </div>
  );
};
