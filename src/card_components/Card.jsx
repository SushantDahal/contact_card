import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h1 className="name">{props.name}</h1>
        <Avatar img={props.img} />
        <img />
      </div>
      <div className="bottom">
        <Details detailInfo={props.phoneNumber} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
