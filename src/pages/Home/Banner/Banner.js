import React from "react";
import chair from "../../../assets/images/chair.png"
import PrimaryButton from "../../../Components/PrimaryButton";
const Banner = () => {
  return (

    <div className="hero-content flex-col lg:flex-row-reverse bg-hero bg-cover">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
        <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Getting Started</PrimaryButton>
        </div>
    </div>


  );
};

export default Banner;
