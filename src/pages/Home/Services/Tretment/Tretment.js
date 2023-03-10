import React from 'react';
import image from "../../../../assets/images/treatment.png"
import PrimaryButton from '../../../../Components/PrimaryButton';
const Tretment = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="banner"
        />
        <div className='mx-9 w-auto'>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6 text-justify">
          It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal 
          distribution of letters,as opposed to using 'Content here, content here', making it look like 
          readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Tretment;