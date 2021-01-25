import { React, useRef, useState, useEffect } from "react";
import Image from "./image";

const ImageComponent = ({ item }) => {
  const placeholder = useRef();
  const [showImage, setShowImage] = useState(false);

  // const placeholderStyles = classnames(styles.placeholder, {
  //   [styles.hidePlaceholder]: showImage,
  // });

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowImage(true);
        }
      });
    };

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(placeholder.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={placeholder}>
      {showImage && (
        <Image
          src={"https://chaitanya360.pythonanywhere.com/media/" + item["img"]}
          style={{
            maxHeight: "800px",
            minHeight: "0px",
          }}
        ></Image>
      )}
    </div>
  );
};

export default ImageComponent;
