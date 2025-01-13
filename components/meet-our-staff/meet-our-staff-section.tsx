import React from 'react';
import StaffCard from './staff-card';
import { staffMembers } from '@/lib/constants';

const MeetOurStaff = () => {
  return (
    <section
      id="meet-our-staff"
      className="relative bg-gradient-to-b from-[#D3EFFB] via-[#D3EFFB] to-white py-16"
    >
      <div className="hidden md:block">
        <div className="mts-shape-divider-top-1736701427">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mts-mobile-shape-divider-top-1736770163">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container pt-20 mx-auto px-4 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meet Our Staff
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our team of experienced professionals is dedicated to providing the
          best care for you and your baby.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <StaffCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurStaff;
