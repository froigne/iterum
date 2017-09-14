import React from "react";
import Slider from "app/components/UI/Slider";
import classes from "./Roller.module.css";

export const Roller = () => (
  <div className={classes.rollerContainer}>
    <Slider vertical={true} speed={100} autoplay={true} autoplaySpeed={1000} arrows={false} pauseOnHover={false}>
      <div>Aze</div>
      <div>Fth</div>
      <div>Vsq</div>
      <div>Mpl</div>
      <div>Cfg</div>
    </Slider>
  </div>
);

export default Roller;
