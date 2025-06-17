import SLACardMotion from './SLACardMotion.jsx'; // adjust the path
import cards from '../data.js';

export async function generateStaticParams() {
  return cards
    .filter(card => card.route) // Only include cards with a non-empty route
    .map(card => ({
      slug: card.route,
    }));
}
const SLADetail = ({ params }) => {
  const { slug } = params;
  console.log('slugs', slug);
  const card = cards.find(item => item.route === slug);
  if (!card) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-xl font-semibold text-red-500'>
          Content not found for this SLA.
        </p>
      </div>
    );
  }

  return (
    <section className='py-12  mx-10 min-h-screen'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#292F43] text-center mb-10'>
        SERVICE <span className='text-[#B70AC1]'>LEVEL</span> AGREEMENT
      </h2>
      <p className='text-center text-sm sm:text-base text-[#B70AC1] mb-6'>
        To ensure that we serve you better, we created our code of conduct.
        <br />
        Kindly read through and agree before sign up to our services.
      </p>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-full bg-[#292F43]'
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl p-5 font-bold bg-[#B70AC1] text-[#FFFFFF] text-center mb-6'>
          {card.title}
        </h1>

        <div className='flex  p-5 flex-col md:flex-row md:space-x-6'>
          <div className='w-full md:w-1/2 mb-6 md:mb-0'>
            <p className='text-sm sm:text-base md:text-lg text-[#FFFFFF] leading-relaxed'>
              {card.paragraph}
            </p>
          </div>

          <div className='w-full md:w-1/2'>
            <div className='relative w-full h-[300px] md:h-[488px]'>
              <Image
                src={card.image}
                alt={card.heading}
                fill
                className='object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>

        
        <div className='p-4'>
          <p className='text-sm sm:text-base md:text-lg text-[#FFFFFF] leading-relaxed mb-8'>
            {card.paragraph2}
          </p>
        </div>

        {/* <div className='text-center'>
          <Link href='/SLA' className='text-[#B70AC1] hover:underline text-lg'>
            Back to SLA
          </Link>
        </div> 
      </motion.div> */}
      <SLACardMotion card={card} />
    </section>
  );
};

export default SLADetail;
