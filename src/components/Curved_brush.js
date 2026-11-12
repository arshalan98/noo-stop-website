
import React from "react";

const Curved_brush = ({ classes = "" }) => {
  return (
    <svg
      className={classes}
      viewBox="0 0 320 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="
          M 8 32
          C 88 7, 198 0, 315 15
          C 221 7, 98 20, 8 32
          Z
        "
        fill="#F5D91D"
      />
    </svg>
  );
};

export default Curved_brush;
