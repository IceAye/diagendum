import { AuthCard } from '@/widgets/AuthCard/AuthCard.tsx';
import { NavLink, Outlet } from 'react-router-dom';
import { Paths } from '@/shared/config/paths.ts';

export const AuthLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f0f2f5',
        color: '#000',
      }}
    >
      <AuthCard>
        <h1>Authorization</h1>
        <NavLink to={Paths.Auth.Signup}>Register</NavLink>
        <NavLink to={Paths.Auth.Login}>Log in</NavLink>
        <Outlet />
      </AuthCard>
    </div>
  );
};
