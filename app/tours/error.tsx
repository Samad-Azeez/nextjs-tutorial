'use client';

function Error({ error }: { error: Error }) {
  console.error(error);

  return <div>There was an error....</div>;
}

export default Error;
