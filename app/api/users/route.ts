import { fetchUsers, saveUser } from '@/app/utils/actions';

export const GET = async () => {
  const users = await fetchUsers();
  return Response.json({ users });
};
