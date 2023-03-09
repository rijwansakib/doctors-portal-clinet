import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;

  const handelBooking = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const slot = from.slot.value;
    const phone = from.phone.value;
    const booking = {
      appoinmentDate: selectedDate,
      treatment: treatment.name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null)
  };
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
          <form onSubmit={handelBooking} className="grid gap-4 grid-col mt-10">
            <input
              type="text"
              disabled value={format(selectedDate, "PP")}
              className="input input-bordered  w-full"
            ></input>
            <select name="slot" className="select select-bordered w-full">
              <option disabled>Select slots</option>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
            required
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            ></input>
            <input
            required
              name="phone"
              type="Number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            ></input>
            <input
            required
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            ></input>
            <br />
            <input
              className="btn btn-accent input w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
