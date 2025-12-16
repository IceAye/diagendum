import { usersById } from '@/mocks/users.ts';

export const UserMotto = () => {
  return <div>{usersById[1].userMotto}</div>;
};
