'use client';

const layerofAssurance = () => {
  return (
    <div>
      <div className='flex my-20 flex-col md:flex-row items-center justify-center px-4 md:ps-10 md:pe-4'>
        <div
          className='flex flex-col md:flex-row w-full  bg-[#292F43] rounded-xl shadow-lg overflow-hidden'
          style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
        >
          <div className='md:w-1/2 flex items-center justify-center p-2'>
            <img
              src='https://fullego.com/Api.gif'
              className='w-full h-full rounded-xl'
              alt=''
            />
          </div>
          {/* Left Section - Text */}
          <div className='text-section md:w-1/2 p-4 md:p-0  text-white'>
            <h1 className='md:w-[386px] text-4xl pt-10   border-b-2  border-[#B70AC1] font-bold mb-6'>
              Your Final <span className='text-[#B70AC1]'>Layer </span>of
              Assurance
            </h1>
            <p className='text-lg   text-[#FFFFFF] mb-8'>
              Today’s cyber threats are more advanced and stealthy than ever,
              often slipping past conventional security tools unnoticed. Our
              approach focuses on exposing the most sophisticated and deeply
              embedded vulnerabilities—those that traditional scanners and
              automated systems typically overlook. Through advanced testing
              techniques, ethical hacking, and deep code analysis, we identify
              potential entry points before malicious actors have a chance to
              exploit them. By addressing these hidden risks early in the
              development lifecycle, we not only enhance your application’s
              security posture but also help reduce downtime, protect sensitive
              data, and maintain user trust. Our mission is to stay one step
              ahead of attackers—so you don’t have to play catch-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layerofAssurance;
