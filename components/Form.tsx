'use client';

import { createUser } from '@/app/utils/actions';
import { useFormState, useFormStatus } from 'react-dom';

// SubmitButton component
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={btnStyle} disabled={pending}>
      {pending ? 'submitting...' : 'submit'}
    </button>
  );
}

// Form component
function Form() {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className='text-2xl capitalize mb-4'>create user</h2>
      {/* Input field for first name */}
      <input
        type='text'
        name='firstName'
        defaultValue='samad'
        required
        className={inputStyle}
      />
      {/* Input field for last name */}
      <input
        type='text'
        name='lastName'
        defaultValue='azeez'
        required
        className={inputStyle}
      />
      {/* Submit button */}
      <SubmitButton />
    </form>
  );
}

// CSS styles for the form
const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

// Export the Form component as the default export
export default Form;
