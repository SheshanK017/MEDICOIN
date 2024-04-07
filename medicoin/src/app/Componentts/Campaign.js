import { useEffect, useState } from 'react';

const Campaign = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date('2024-04-10') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className='flex flex-row gap-10 mt-64'>
        <div className="flex flex-col max-w-md  mx-auto bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg bg-[white]/10" style={{height:"620px"}}>
      <img
        className="object-cover w-full h-64"
        src="../../assets/images/cancer.jpeg"
        alt="Campaign"
      />
      <div className="p-4">
        
        <div className="flex flex-col justify-between items-center gap-20">
        <h2 className="text-2xl font-semibold   mt-4 font-aldrich text-blueSecondary">CANCER TREATMENT</h2>
          <div className="text-5xl font-bold font-abc  mt-4 text-blueSecondary">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
          <button className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl"  >DONATE</button>
        </div>
       
      </div>
    </div>




    <div className="flex flex-col max-w-md  mx-auto bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg bg-[white]/10" style={{height:"620px"}}>
      <img
        className="object-cover w-full h-64"
        src="../../assets/images/AIDS.jpeg"
        alt="Campaign"
      />
      <div className="p-4">
        
        <div className="flex flex-col justify-between items-center gap-20">
        <h2 className="text-2xl font-semibold   mt-4 font-aldrich text-blueSecondary">AIDS</h2>
          <div className="text-5xl font-bold font-abc  mt-4 text-blueSecondary">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
          <button className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl"  >DONATE</button>
        </div>
       
      </div>
    </div>




    <div className="flex flex-col max-w-md  mx-auto bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg bg-[white]/10" style={{height:"620px"}}>
      <img
        className="object-cover w-full h-64"
        src="../../assets/images/alzeimers.jpeg"
        alt="Campaign"
      />
      <div className="p-4">
        
        <div className="flex flex-col justify-between items-center gap-20">
        <h2 className="text-2xl font-semibold   mt-4 font-aldrich text-blueSecondary">ALZEIMERS</h2>
          <div className="text-5xl font-bold font-abc  mt-4 text-blueSecondary">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
          <button className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl"  >DONATE</button>
        </div>
       
      </div>
    </div>
    </div>
   
  );
};

export default Campaign;
