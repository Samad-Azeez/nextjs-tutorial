import Image from 'next/image';
import Link from 'next/link';

// API endpoint for fetching tours data
const url = 'https://www.course-api.com/react-tours-project';

// Define the Tour type
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

// Async function to fetch and display tours
async function ToursPage() {
  // Fetch data from the API
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);

  // Render the tours
  return (
    <section>
      <h1 className='text-3xl mb-4'>Tours</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        {data.map((tour) => {
          return (
            // Link to the tour details page
            <Link
              className='hover:text-blue-500'
              key={tour.id}
              href={`/tours/${tour.id}`}
            >
              <div className='relative h-48 mb-2'>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes='33vw'
                  priority
                  className='object-cover rounded'
                />
              </div>
              <h2>{tour.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ToursPage;
