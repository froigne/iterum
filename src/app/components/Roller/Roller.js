import ImmutablePropTypes from "react-immutable-proptypes";
import React from "react";
import Slider from "app/components/UI/Slider";
import classes from "./Roller.module.css";

export const Roller = ({ elements }) => (
  <div className={classes.rollerContainer}>
    <Slider vertical={true} speed={100} autoplay={true} autoplaySpeed={1000} arrows={false} pauseOnHover={false}>
      {elements.entrySeq().map(([index, element]) => <div key={index}> {element} </div>)}
    </Slider>
  </div>
);

Roller.propTypes = {
  elements: ImmutablePropTypes.list
};

export default Roller;
