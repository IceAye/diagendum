import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout/MainLayout.tsx';
import { PlannerPage } from '@/pages/PlannerPage/PlannerPage.tsx';
import { DiaryPage } from '@/pages/DiaryPage/DiaryPage.tsx';
import { HabitsPage } from '@/pages/HabitsPage/HabitsPage.tsx';
import { ListsPage } from '@/pages/ListsPage/ListsPage.tsx';
import { AuthLayout } from '@/app/layouts/AuthLayout/AuthLayout.tsx';
import { RegisterPage } from '@/pages/RegisterPage/RegisterPage.tsx';
import { LoginPage } from '@/pages/LoginPage/LoginPage.tsx';
import { Paths } from '@/shared/config/paths.ts';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={Paths.Root} element={<MainLayout />}>
          <Route path={Paths.Planner.Root} element={<PlannerPage />} />
          <Route path={Paths.Diary.Root} element={<DiaryPage />} />
          <Route path={Paths.Habits.Root} element={<HabitsPage />} />
          <Route path={Paths.Lists.Root} element={<ListsPage />} />
        </Route>
        <Route path={Paths.Auth.Root} element={<AuthLayout />}>
          <Route path={Paths.Auth.Signup} element={<RegisterPage />} />
          <Route path={Paths.Auth.Login} element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};
