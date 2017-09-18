import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import React from "react";
import Slider from "app/components/UI/Slider";
import classes from "./Roller.module.css";

export const Roller = ({ elements, onClick, onChange, ...props }) => {
  const handleChange = () => event => {
    onChange();
  };

  return (
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
        afterChange={handleChange}
        rtl={true}
        slidesToShow={1}
        slidesToScroll={1}
        {...props}
      >
        {elements.entrySeq().map(([index, element]) => <div key={index}> {element} </div>)}
      </Slider>
    </div>
  );
};

Roller.propTypes = {
  elements: ImmutablePropTypes.list,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Roller;
