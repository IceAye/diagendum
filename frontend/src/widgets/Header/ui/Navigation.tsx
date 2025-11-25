import { NavLink } from 'react-router-dom';
import { Paths } from '@/shared/config/paths.ts';

export const Navigation = () => {
  return (
    <aside style={{ color: '#000' }}>
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <NavLink to={Paths.Planner.Root}>Planner</NavLink>
          </li>
          <li>
            <NavLink to={Paths.Diary.Root}>Diary</NavLink>
          </li>
          <li>
            <NavLink to={Paths.Habits.Root}>Habits</NavLink>
          </li>
          <li>
            <NavLink to={Paths.Lists.Root}>Lists</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
