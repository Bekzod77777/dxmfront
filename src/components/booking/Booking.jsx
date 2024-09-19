import React from "react";
import "./Booking.css";

import Region from "../region/Region";
import Service from "../service/Service";
import DateComponent from "../date/Date";
import Contact from "../contact/Contact";

const Booking = () => {
  return (
    <div className="booking-container">
      <div className="booking">
        <h1 tabIndex={0}>Qabulga oldindan yozilish</h1>
        <ul className="v-expansion-panel booking-wrapper theme--light">
          <Region />
          <Service />
          <DateComponent />
          <Contact />
        </ul>
      </div>
    </div>
  );
};

export default Booking;
