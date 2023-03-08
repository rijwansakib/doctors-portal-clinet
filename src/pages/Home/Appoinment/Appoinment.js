import React from "react";
import doctor_image from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/PrimaryButton";
const Appoinment = () => {
  return (
    <div className="hero  bg-doctor">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor_image}
          className="max-w-sm -mt-20 rounded-lg hidden lg:block"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
