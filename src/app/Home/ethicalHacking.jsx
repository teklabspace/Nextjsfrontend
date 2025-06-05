'use client';
import { useEffect, useRef, useState } from 'react';

const EthicalHacking = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isApiReady, setIsApiReady] = useState(false);
  const [counts, setCounts] = useState({
    hackers: 0,
    partners: 0,
    visitors: 0,
  });
  const statsRef = useRef(null);
  const playerRefs = useRef({});

  // Load YouTube Iframe API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setIsApiReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = () => console.error('Failed to load YouTube Iframe API');
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => setIsApiReady(true);

    return () => {
      document.body.removeChild(script);
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  // Initialize YouTube players
  useEffect(() => {
    if (!isApiReady) return;

    const initializePlayer = (videoId, elementId, youtubeVideoId) => {
      playerRefs.current[videoId] = new window.YT.Player(elementId, {
        videoId: youtubeVideoId,
        height: '200',
        width: '100%',
        playerVars: { enablejsapi: 1, playsinline: 1 },
        events: {
          onReady: () => console.log(`${videoId} ready`),
          onStateChange: event => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setPlayingVideo(videoId);
              Object.keys(playerRefs.current).forEach(key => {
                if (key !== videoId && playerRefs.current[key]) {
                  playerRefs.current[key].pauseVideo();
                }
              });
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setPlayingVideo(null);
            }
          },
        },
      });
    };

    initializePlayer('video1', 'player1', 'uBvYFNR5wvw');
    initializePlayer('video2', 'player2', 'M8IPTJdQ7uk');

    return () => {
      Object.values(playerRefs.current).forEach(player => player.destroy());
      playerRefs.current = {};
    };
  }, [isApiReady]);

  // Number count animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          const animateCount = (target, key, duration) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                start = target;
                clearInterval(timer);
              }
              setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
            }, 16);
          };

          animateCount(100, 'hackers', 2000);
          animateCount(20, 'partners', 2000);
          animateCount(500, 'visitors', 2000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const togglePlay = videoId => {
    if (!isApiReady || !playerRefs.current[videoId]) {
      console.warn(`Cannot play video ${videoId}: API or player not ready`);
      return;
    }
    if (playingVideo === videoId) {
      playerRefs.current[videoId].pauseVideo();
    } else {
      playerRefs.current[videoId].playVideo();
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <section className='py-16 px-4 text-center max-w-5xl w-full'>
        <div className='relative'>
          <h2 className='text-4xl font-bold text-[#B70AC1] mb-8 border-b-2 inline-block border-[#292F43]'>
            Ethical Hacking
          </h2>
          <div className='absolute -top-20  left-30 md:right-20 w-[112px] h-[112px] bg-[#B70AC1] opacity-60 blur-[80px] z-0'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Card 1 */}
          <div className='flex justify-center'>
            <div className='bg-[#292F43] rounded-xl shadow-md max-w-md w-full overflow-hidden transition hover:shadow-xl relative'>
              <div id='player1' className='w-full h-[200px]'></div>
              <button
                onClick={() => togglePlay('video1')}
                className={`absolute bottom-12 right-4 z-10 ${
                  !isApiReady
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer'
                }`}
                aria-label={
                  playingVideo === 'video1' ? 'Pause video' : 'Play video'
                }
                disabled={!isApiReady}
              >
                {!isApiReady ? (
                  <svg
                    className='w-8 h-8 animate-spin text-white'
                    viewBox='0 0 24 24'
                  >
                    <path
                      d='M12 4V2m0 20v-2m8-8h2m-20 0h-2m15.364-6.364l1.414-1.414m-12.728 12.728l-1.414 1.414m12.728 0l-1.414-1.414M6.364 6.364l1.414 1.414'
                      stroke='currentColor'
                      strokeWidth='2'
                    />
                  </svg>
                ) : playingVideo === 'video1' ? (
                  <img src='/pause.svg' alt='Pause' />
                ) : (
                  <img src='/play.svg' alt='Play' />
                )}
              </button>
              <div className='text-start text-white p-4'>
                <p className='text-sm font-semibold'>
                  <span className='text-[#B70AC1]'>Teklabspace | </span>
                  Crowd source God's
                  <br /> security platform
                </p>
                <p className='text-xs mt-2'>Streaming 2021</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='flex justify-center'>
            <div className='bg-[#292F43] rounded-xl shadow-md max-w-md w-full overflow-hidden transition hover:shadow-xl relative'>
              <div id='player2' className='w-full h-[200px]'></div>
              <button
                onClick={() => togglePlay('video2')}
                className={`absolute bottom-12 right-4 z-10 ${
                  !isApiReady
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer'
                }`}
                aria-label={
                  playingVideo === 'video2' ? 'Pause video' : 'Play video'
                }
                disabled={!isApiReady}
              >
                {!isApiReady ? (
                  <svg
                    className='w-8 h-8 animate-spin text-white'
                    viewBox='0 0 24 24'
                  >
                    <path
                      d='M12 4V2m0 20v-2m8-8h2m-20 0h-2m15.364-6.364l1.414-1.414m-12.728 12.728l-1.414 1.414m12.728 0l-1.414-1.414M6.364 6.364l1.414 1.414'
                      stroke='currentColor'
                      strokeWidth='2'
                    />
                  </svg>
                ) : playingVideo === 'video2' ? (
                  <img src='/pause.svg' alt='Pause' />
                ) : (
                  <img src='/play.svg' alt='Play' />
                )}
              </button>
              <div className='text-start text-white p-4'>
                <p className='text-sm font-semibold'>
                  <span className='text-[#B70AC1]'>Teklabspace | </span>
                  Crowd source
                  <br /> security platform
                </p>
                <p className='text-xs mt-2'>Streaming 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className='py-16 px-4 text-center max-w-5xl w-full'
      >
        <div className='grid relative grid-cols-1 sm:grid-cols-3 gap-8'>
          <div className='absolute -top-10 left-10 md:left-20 w-[112px] h-[112px] bg-[#B70AC1] opacity-60 blur-[80px] z-0'></div>
          <div className='absolute -top-10 hidden md:block md:right-20 w-[112px] h-[112px] bg-[#B70AC1] opacity-60 blur-[80px] z-0'></div>{' '}
          <div className='absolute -top-10 hidden md:block md:right-96 w-[112px] h-[112px] bg-[#B70AC1] opacity-60 blur-[80px] z-0'></div>
          <div>
            <h3 className='text-3xl font-bold text-[#B70AC1]'>
              {counts.hackers}+
            </h3>
            <p className='text-[#B70AC1] text-lg'>Active Hackers</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-[#B70AC1]'>
              {counts.partners}+
            </h3>
            <p className='text-[#B70AC1] text-lg'>Trusted Partners</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-[#B70AC1]'>
              {counts.visitors}
            </h3>
            <p className='text-[#B70AC1] text-lg'>Unique Daily Visitors</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthicalHacking;
