import { fetchUsers, saveUser } from '@/app/utils/actions';
import { NextRequest, NextResponse } from 'next/server';

/** GET REQUEST */
export const GET = async (req: NextRequest) => {
  console.log(req.url);
  console.log(req.nextUrl.searchParams.get('id'));

  const users = await fetchUsers();
  //   override the current path to that of the home page
  // return NextResponse.redirect(new URL('/', req.url));
  return NextResponse.json({ users });
};

/** POST REQUEST */
export const POST = async (req: NextRequest) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };

  await saveUser(newUser);

  return Response.json({ msg: 'user created' });
};
