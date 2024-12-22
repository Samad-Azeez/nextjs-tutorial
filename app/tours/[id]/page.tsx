import hijabImg from '@/images/hijab.jpg';
import Image from 'next/image';
async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1 className='text-4xl'>ID : {id}</h1>
      <section className='flex gap-x-4 mt-4'>
        {/* local image */}
        <div>
          <Image
            src={hijabImg}
            alt='hijab'
            width={300}
            height={300}
            className='w-[300] h-[300] object-cover rounded'
            priority
          />
          <h2>local image</h2>
        </div>
        {/* remote image */}
        <div></div>
      </section>
    </div>
  );
}

export default page;
