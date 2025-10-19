import React from 'react';
import bgImg from '../../assets/Group 3.png'
const Herocard = ({ progress, resolve}) => {
  return (
    <div className="bg-[#F5F5F5] p-1.5">
      <div className="md:max-w-[90%] mx-auto grid md:grid-cols-2 gap-5 my-5">
        <div
          className="h-[40vh] bg-purple-500 w-full rounded-lg flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(99, 46, 227,0.5), rgba(159, 98, 242,0.5)), url(${bgImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-white text-2xl">In-Progress</h2>
          <h3 className="text-white text-6xl font-semibold">{progress}</h3>
        </div>
        <div
          className="h-[40vh] bg-green-500  w-full rounded-lg flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(84, 207, 104,0.5), rgba(0, 130, 122,0.5)), url(${bgImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
         <h2 className="text-white text-2xl">Resolved</h2>
          <h3 className="text-white text-6xl font-semibold">{resolve}</h3>
        </div>
      </div>
    </div>
  );
};

export default Herocard;