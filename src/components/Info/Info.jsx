import React from "react";
import "./Info.scss";
import Img from "./card.png";

export default function Info() {
  return (
    <div className="info">
      <img src={Img} alt="" />
      <div className="info-content">
        <h1 className="name">Laura Smith</h1>
        <p className="title">Frontend Developer</p>
        <p className="website">laurasmith.website</p>
        <div className="btn-wrapper">
          <button className="btn-email">Email</button>
          <button className="btn-linkedin">LinkedIn</button>
        </div>
      </div>
    </div>
  );
}
