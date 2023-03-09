import React from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appoinment = () => {
  const [selectedDate, setselectedDate] = React.useState(new Date());
  return (
    <div>
      <AppoinmentBanner 
            selectedDate={selectedDate}
            setselectedDate={setselectedDate}
      ></AppoinmentBanner>
      <AvailableAppointment
            selectedDate={selectedDate}
            setselectedDate={setselectedDate}
      ></AvailableAppointment>
    </div>
  );
};

export default Appoinment;
