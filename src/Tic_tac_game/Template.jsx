import React from "react";
import "./template.css";

const Template = (props) => {
  return (
    <div className="template_container" onClick={props.onClick}>
      <h2>{props.value}</h2>
    </div>
  );
};

export default Template;
