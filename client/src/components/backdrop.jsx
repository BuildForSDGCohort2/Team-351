import React from "react";

import "../styles/backdrop.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className="Backdrop" onClick={props.hide}></div>
  ) : null;
};

export default Backdrop;
