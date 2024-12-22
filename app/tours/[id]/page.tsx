async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <h1 className='text-4xl'>ID : {id}</h1>
    </div>
  );
}

export default page;
