import React from "react";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import char from '../../../assets/images/chair.png'

const AppoinmentBanner = () => {
    const [selectedDate, setselectedDate] = React.useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
      footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    }
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
                footer={footer}
          />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
