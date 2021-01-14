import React from "react";
import "./css/image.css";
const Image = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <React.Fragment>
      <img
        onLoad={() => {
          console.log("IMG is loaded");
        }}
        onLoadStart={() => {
          console.log("IMG is loaded");
        }}
        className="image_blur thumb"
        src={process.env.PUBLIC_URL + "/images/blur_placeholder.jpg"}
        style={{ display: isLoaded ? "none" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full"
        style={{ display: isLoaded ? "block" : "none" }}
        src={props.src}
      />
    </React.Fragment>
  );
};
export default Image;
