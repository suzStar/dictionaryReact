import React from "react";
import "./Photos.css";

function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.photos.map(function (photo, index) {
          return (
            <div className="col-6 col-sm-6 col-md-12" key={index}>
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
  } else {
    return null;
  }
}

export default Photos;
