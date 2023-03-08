import React from "react";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimolial";
const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <InfoCards></InfoCards>
        <Services></Services>
        <Appoinment></Appoinment>
        <Testimonial></Testimonial>
        <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
