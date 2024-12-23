'use server';

// Asynchronous function to create a user
export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  console.log({ firstName, lastName });
  // or use Object.fromEntries() to convert the FormData object to a plain object
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
};
