import { Navigation } from '@/widgets/Header/ui/Navigation.tsx';
import { CurrentDateTime } from '@/widgets/Header/ui/CurrentDateTime.tsx';
import { UserPanel } from '@/widgets/Header/ui/UserPanel.tsx';

export const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4 bg-gray-100 shadow text-black'>
      <Navigation />
      <CurrentDateTime />
      <UserPanel />
    </header>
  );
};
