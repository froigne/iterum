import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import React from "react";
import Slider from "app/components/UI/Slider";
import classes from "./Roller.module.css";

export const Roller = ({ elements, onClick, onChange, rollSpeed, isRolling, rollResult, ...props }) => (
  <div className={classes.rollerContainer}>
    <Slider
      onClick={onClick}
      vertical={true}
      speed={100}
      swiping={false}
      dragging={false}
      wrapAround={true}
      afterSlide={onChange}
      easing="easeInOutSine"
      autoplayInterval={rollSpeed}
      decorators={[]}
      autoplay={isRolling}
      slideIndex={rollResult}
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
