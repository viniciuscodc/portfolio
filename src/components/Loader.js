import * as React from "react";
import "src/style/loader.scss";
import spinner from "src/images/load.png";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <img src={spinner} alt="spinner-img" />
      <span>Loading</span>
      <div></div>
      <div className="bar">
        <div className="bar-progress"></div>
      </div>
    </div>
  );
}
