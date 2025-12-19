import { usersById } from '@/mocks/users.ts';

export const Username = () => {
  return <div> {usersById[1].username} </div>;
};
