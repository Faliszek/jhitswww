//@flow
import React from "react";

type Props = {};

const Icon = (props: Props) => {
  return (
    <i className={`material-icons shadow-${props.shadow} ${props.type}`}>
      {props.type}
    </i>
  );
};

export default Icon;
