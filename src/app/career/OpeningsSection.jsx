'use client';

const openings = [
  {
    title: 'Content Engineer',
    location: 'West Africa, East Africa, North Africa',
  },
  {
    title: 'Sales Executive Manager',
    location: 'West Africa, East Africa, North Africa, South Africa',
  },
  {
    title: 'Frontend Developer',
    location: 'Remote',
  },
  {
    title: 'PHP C# Developer',
    location: 'Remote',
  },
  {
    title: 'Product Manager',
    location: 'West Africa, East Africa, North Africa',
  },
  {
    title: 'Graphics Designer',
    location: 'Remote',
  },
  {
    title: 'Training Content Developer',
    location: 'West Africa, East Africa, North Africa',
  },
];

const OpeningsSection = () => {
  return (
    <section className='py-12 px-4 sm:px-6 md:px-10 '>
      <h2 className='text-3xl  md:text-4xl font-bold text-[#292F43] text-center mb-10'>
        Openings
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {openings.map((opening, index) => (
          <div
            key={index}
            className='flex justify-between items-center p-6 bg-[#3A4156] rounded-lg'
          >
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-[#B70AC1] mb-2'>
                {opening.title}
              </h3>
              <p className='text-base  text-white'>
                Location: {opening.location}
              </p>
            </div>
            <div>
              <img src='plussign.svg' alt='' />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpeningsSection;
