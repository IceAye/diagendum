import { useNavigate } from 'react-router-dom';
import { logout } from '@/features/logout/model/logout.ts';

export const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(href);
  };

  return <button onClick={handleLogout}>Log out</button>;
};
