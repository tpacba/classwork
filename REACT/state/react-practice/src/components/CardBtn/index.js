import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.handleclick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default CardBtn;
