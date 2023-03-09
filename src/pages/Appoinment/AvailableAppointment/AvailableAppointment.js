import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOption from "./AppoinmentOption";
const AvailableAppointment = ({ selectedDate, setselectedDate }) => {
  const [appoinment, setAppoinment] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appoinmentData.json")
      .then((res) => res.json())
      .then((data) => setAppoinment(data));
  }, []);
  return (
    <section>
      <div>
        <p className="text-center text-primary">
          Available Services on {format(selectedDate, "PP")}
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {appoinment.map((option) => (
            <AppoinmentOption
              key={option._id}
              appoinment={option}
              setTreatment={setTreatment}
            ></AppoinmentOption>
          ))}
        </div>
        {
                treatment&&
                  <BookingModal
                  selectedDate={selectedDate}
                  treatment={treatment}
                ></BookingModal>
        }
      </div>
    </section>
  );
};

export default AvailableAppointment;
