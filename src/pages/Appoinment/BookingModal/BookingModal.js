import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment,selectedDate}) => {
  const { name,slots } = treatment;
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid gap-4 grid-col mt-10"> 
            <input type='text' disabled value={format(selectedDate, "PP")} className="input input-bordered  w-full"></input>
            <select className="select select-bordered w-full">
                <option disabled selected>Select slots</option>
                {
                    slots.map(slot=>
                    <option 
                        key={treatment._id}
                         value={slot}>
                            {slot}
                     </option>)
                }
            </select>
            <input type='text' placeholder="Full Name" className="input input-bordered w-full"></input>
            <input type='Number' placeholder="Phone Number" className="input input-bordered w-full"></input>
            <input type='email' placeholder="Email" className="input input-bordered w-full"></input>
            <br/>
            <input className="btn btn-accent input w-full" type='submit' value="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
