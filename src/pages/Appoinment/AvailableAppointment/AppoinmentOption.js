import React from "react";

const AppoinmentOption = ({ appoinment, setTreatment }) => {
  const { name, slots } = appoinment;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title text-primary">{name}</h2>
        {/* <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p> */}
        <p>08.00 AM - 5.00 PM</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length===0}
            onClick={() => setTreatment(appoinment)}
            className="btn btn-primary text-white"
            htmlFor="booking-modal"
          >
            BOOK APPOINMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
