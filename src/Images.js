import React from "react";
//import "./Images.css";

function Images(props) {
  console.log(props.photos);
  return (
    <div className="row">
      {props.photos.map(function (photo, index) {
        return (
          <div className="col-2" key={index}>
            <a href={photo.url} target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src={photo.src.tiny}
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
