import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import React from "react";
import Slider from "app/components/UI/Slider";
import classes from "./Roller.module.css";

export const Roller = ({ elements, onClick, onChange, rollSpeed, isRolling, rollResult, ...props }) => (
  <div className={classes.rollerContainer} onClick={onClick}>
    <Slider
      vertical={true}
      speed={100}
      arrows={false}
      pauseOnHover={false}
      swipe={false}
      swipeToSlide={false}
      touchMove={false}
      draggable={false}
      lazyLoad={false}
      infinite={true}
      rtl={true}
      afterChange={onChange}
      autoplaySpeed={rollSpeed}
      autoplay={isRolling}
      slickGoTo={rollResult}
      {...props}
    >
      {elements.entrySeq().map(([index, element]) => <div key={index}> {element} </div>)}
    </Slider>
  </div>
);

Roller.propTypes = {
  elements: ImmutablePropTypes.list,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  rollSpeed: PropTypes.number.isRequired,
  isRolling: PropTypes.bool.isRequired,
  rollResult: PropTypes.number.isRequired
};

export default Roller;
