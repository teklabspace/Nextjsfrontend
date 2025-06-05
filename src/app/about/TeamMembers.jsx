'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Team members data
const teamMembers = [
  { id: 1, image: '/Group 15077.svg' },
  { id: 2, image: '/cio.svg' },
  { id: 3, image: '/ceo.svg' },
  { id: 4, image: '/Group 15095.svg' },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + teamMembers.length) % teamMembers.length;
      cards.push({
        ...teamMembers[index],
        position: i,
      });
    }
    return cards;
  };

  return (
    <div
      className='w-full h-[130vh] flex flex-col justify-center my-20 items-center bg-no-repeat bg-center bg-cover'
      style={{ backgroundImage: "url('/ourteambg.png')" }}
    >
      <div className='mt-10 text-4xl font-bold text-white'>
        <p>
          Meet <span className='text-[#B70AC1]'> Our </span> Team
        </p>
      </div>

      <div
        className='relative w-full h-full flex items-center justify-center'
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        role='region'
        aria-label='Image Carousel'
      >
        <div className='relative w-full max-w-7xl h-full flex items-center justify-center px-4'>
          {getVisibleCards().map(member => (
            <div
              key={member.id}
              className={`absolute transition-all px-30 duration-500 ease-in-out ${
                member.position === 0
                  ? 'z-20 scale-100 opacity-100'
                  : member.position === -1
                  ? '-translate-x-[60%] scale-75 opacity-30'
                  : 'translate-x-[60%] scale-75 opacity-30'
              }`}
            >
              <div className='relative h-150   w-100 overflow-hidden mx-auto'>
                <Image
                  src={member.image}
                  alt={`Carousel image ${member.id}`}
                  fill
                  className='h-full w-full object-cover'
                  onError={e => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevious}
          className='absolute left-4 top-1/2 -translate-y-1/2 p-4'
          aria-label='Previous image'
        >
          <img src='leftarrow.svg' alt='left arrow' />
        </button>

        <button
          onClick={handleNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 p-4'
          aria-label='Next image'
        >
          <img src='righarrow.svg' alt='right arrow' />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
