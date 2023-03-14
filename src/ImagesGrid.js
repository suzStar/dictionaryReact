import React from "react";
//import "./Images.css";

function Images(props) {
  return (
    <div className="row">
      {props.photos.photos.map(function (photo, index) {
        return (
          <div
            className="col-6 gx-1 mb-1"
            key={index > `${props.startIdx}` && index < `${props.endIdx}`}
          >
            <a href={photo.url} target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src={photo.src.landscape}
                alt={photo.alt}
              ></img>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Images;
