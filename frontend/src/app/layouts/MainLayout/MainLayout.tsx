import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header/ui/Header.tsx';

export const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <main style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
