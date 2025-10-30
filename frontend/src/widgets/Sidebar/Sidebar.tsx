import { NavLink } from 'react-router-dom';
import { Paths } from '@/shared/config/paths.ts';

export const Sidebar = () => {
  return (
    <aside style={{ width: '200px', background: '#2def8f', color: '#000' }}>
      <nav>
        <div>Navigation links</div>
        <ul>
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
