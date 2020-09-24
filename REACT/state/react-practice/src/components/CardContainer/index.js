import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  console.log(props)
  return (
    <div className="jumbotron card-container">
      {/* Pass props to Card */}
      <Card 
      title={props.title}
      image={props.image}
      profileUrl={props.profileUrl}
      handleclick={props.handleclick}
        />
    </div>
  );
}

export default CardContainer;
