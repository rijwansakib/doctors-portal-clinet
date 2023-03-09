import React from "react";
import { DayPicker } from "react-day-picker";
import char from '../../../assets/images/chair.png'

const AppoinmentBanner = ({selectedDate,setselectedDate}) => {
   
  return (
    <header className="my-6 bg-hero bg-cover">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={char}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""/>
          <div className="mr-6">
          <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setselectedDate}
          />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
