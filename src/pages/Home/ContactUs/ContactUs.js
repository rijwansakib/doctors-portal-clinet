/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton";

const ContactUs = () => {
  return (
    <div className="hero bg-doctor">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <p className="py-2 text-sky-400/100 text-center font-bold text-2xl ">Contact Us</p>
          <h1 className="text-5xl font-bold text-white">Stay connected with us</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control border-solid border rounded-md  border-slate-300">
                <textarea className="textarea" placeholder="Your Message"></textarea>        
            </div>
            <div className="form-control mt-6">
            <PrimaryButton>Getting Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
