'use server';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

/**FORM ACTION */
type User = {
  id: string;
  firstName: string;
  lastName: string;
};

// Asynchronous function to create a user
export const createUser = async (previousState: any, formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;

  // or use Object.fromEntries() to convert the FormData object to a plain object
  //   const rawData = Object.fromEntries(formData);
  //   console.log(rawData);

  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    await saveUser(newUser);
    revalidatePath('/actions'); // Revalidate the page
    return 'user created successfully....';
  } catch (error) {
    console.log(error);
    return 'error creating user....';
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf-8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};

/**DELETE ACTION */

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const newUsers = users.filter((user: User) => user.id !== id);
  await writeFile('users.json', JSON.stringify(newUsers));
  revalidatePath('/actions'); // Revalidate the page
};

export const removeUser = async (id: string, formData: FormData) => {
  // const name = formData.get('name') as string;
  // console.log(name);

  const users = await fetchUsers();
  const newUsers = users.filter((user: User) => user.id !== id);
  await writeFile('users.json', JSON.stringify(newUsers));
  revalidatePath('/actions'); // Revalidate the page
};
