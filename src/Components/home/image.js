import React from "react";
import "./css/image.css";
import blur_placeholder from "./assets/images/blur_placeholder.jpg";
import { useLoading, Bars } from "@agney/react-loading";

const Image = (props) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="200" />,
  });
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <React.Fragment>
      <section
        {...containerProps}
        style={{
          height: "100%",
          color: "grey",
          padding: "100px",
          textAlign: "center",
          top: "50px",
          display: isLoaded ? "none" : "visible",
        }}
      >
        {indicatorEl}
      </section>

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
