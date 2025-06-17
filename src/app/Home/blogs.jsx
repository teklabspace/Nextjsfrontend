'use client';

const blogs = () => {
  return (
    <div>
      <section className='px-4 md:px-10 py-16 bg-white'>
        <div className='text-start mb-12 relative'>
          <h2 className='text-4xl inline-block border-b-2 border-[#292F43] font-bold'>
            Our <span className='text-[#B70AC1]'>Blogs</span>
          </h2>
          <p className='mt-4 text-lg text-[#292F43]'>
            Hey there, Check out our blog today <br />
            We have tons of amazing content for you!
          </p>
          <button
            className='py-2 px-6 cursor-pointer mt-4 bg-[#B70AC1] text-white rounded-full'
            onClick={() =>
              window.open(
                'https://www.reddit.com/r/bugbounty/comments/1byzexk/bug_bounty_blogs_and_content_dump'
              )
            }
          >
            View All Blogs
          </button>

          <div className='absolute -top-10 hidden md:block md:left-52 w-[200px] h-[200px] bg-[#B70AC1] opacity-50 blur-[80px] z-0'></div>
        </div>

        {/* Blog Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4'>
          {/* First Blog Card - Full width on all devices */}
          <div className='col-span-1 md:col-span-2 lg:col-span-4 row-span-2 bg-[#292F43] relative rounded-4xl shadow'>
            <a
              href='https://blog.hackbynight.nl/getting-started-with-bug-bounty-hunting-in-2025-a-real-world-guide-051a3fb36376'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='absolute top-4 right-4 rounded-full bg-white flex items-center justify-center p-2'>
                <img
                  src='Group 3633.svg'
                  className='cursor-pointer'
                  alt='arrow'
                />
              </div>
            </a>

            <img
              src='https://fullego.com/our blogs1.gif'
              className='w-full h-[250px]  md:h-[300px] rounded-4xl object-cover'
              alt='Blog 1'
            />
            <div className='md:w-[100%] p-4 text-white'>
              <p className='text-[#B70AC1] pt-5 font-semibold text-xl'>
                Exploring the Dark Web
              </p>
              <p className='text-[#FFFFFF] text-sm pt-5'>
                <span className='block mb-3'>
                  What Lies Beneath the Surface of the Internet.
                </span>
                <span>
                  When you open your browser to search for something on Google,
                  check Instagram, or watch a YouTube video you’re navigating
                  just the tip of the internet iceberg. Beneath this visible
                  layer lies a hidden world mysterious and often misunderstood —
                  the Dark Web.
                </span>
              </p>
              <a
                href='https://blog.hackbynight.nl/getting-started-with-bug-bounty-hunting-in-2025-a-real-world-guide-051a3fb36376'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='text-sm text-[#B70AC1] mt-2 underline cursor-pointer'>
                  Read more...
                </p>
              </a>
            </div>
          </div>

          {/* Right Top Card */}
          <div className='col-span-1 md:col-span-2 lg:col-span-8 flex flex-col lg:flex-row bg-[#292F43] rounded-4xl shadow'>
            <div className='relative flex items-center justify-center'>
              <img
                src='https://fullego.com/blog2.gif'
                alt='Security Icon'
                className='w-full h-[250px] md:h-[300px] rounded-4xl object-cover'
              />
              <a
                href='https://infosecwriteups.com/my-first-year-in-bug-bounty-10994de47849'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='absolute top-2 left-2 bg-white rounded-full p-2 shadow-md'>
                  <img src='Group 3633.svg' alt='arrow' />
                </div>
              </a>
            </div>
            <div className='md:w-[60%] p-4 text-white'>
              <h3 className='text-[#B70AC1] pt-5 font-semibold text-xl'>
                Why Security Matters in the Digital Age
              </h3>
              <p className='text-sm text-[#FFFFFF]'>
                In today’s hyper-connected world, security is no longer just an
                option — it’s a necessity. Whether you're browsing social media,
                running a business, or just checking emails, your personal
                information is constantly being shared and stored online. But
                with every innovation comes a risk. As our digital lives grow,
                so do the threats to our privacy, finances, and safety. That’s
                where security steps in.
              </p>
              <a
                href='https://infosecwriteups.com/my-first-year-in-bug-bounty-10994de47849'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='text-sm text-[#B70AC1] mt-2 underline cursor-pointer'>
                  Read more...
                </p>
              </a>
            </div>
          </div>

          {/* Right Bottom Card */}
          <div className='col-span-1 md:col-span-2 lg:col-span-8 flex flex-col lg:flex-row bg-[#292F43] rounded-4xl shadow'>
            <div className='relative flex items-center justify-center '>
              <img
                src='https://fullego.com/11.gif'
                alt='Tech Icon'
                className='w-full h-[250px] md:h-[300px] rounded-4xl object-cover'
              />
              <a
                href='https://github.com/rix4uni/medium-writeups'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='absolute top-2 left-2 bg-white rounded-full p-2 shadow-md'>
                  <img src='Group 3633.svg' alt='arrow' />
                </div>
              </a>
            </div>
            <div className='md:w-[60%] p-4 text-white'>
              <h3 className='text-[#B70AC1] pt-5 font-semibold text-xl'>
                The Power of Technology
              </h3>

              <p className='text-[#FFFFFF] text-sm pt-5'>
                <span className='block mb-3'>
                  Shaping Our Future One Innovation at a Time{' '}
                </span>
                <span>
                  We live in a time where technology isn’t just part of life —
                  it is life. From the moment we wake up to the moment we sleep,
                  tech touches everything we do. It's in our homes, our pockets,
                  our cars, and even in the way we think. From chatbots to
                  self-driving cars, AI is everywhere. It's revolutionizing how
                  we work, create, and communicate.
                </span>
              </p>
              <a
                href='https://github.com/rix4uni/medium-writeups'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='text-sm text-[#B70AC1] mt-2 underline cursor-pointer'>
                  Read more...
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default blogs;
