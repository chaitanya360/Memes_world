import { React, useState, useRef, useEffect } from "react";

import { useLoading, ThreeDots } from "@agney/react-loading";
import Post from "./post.js";

const CardComponet = () => {
  const [items, setItems] = useState(false);

  useEffect(() => {
    console.log("inside card componenet");
    fetchData();
  }, []);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="200" />,
  });

  function fetchData() {
    fetch("https://chaitanya360.pythonanywhere.com/api/images/")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        data.map((e) => {
          if (!e["user_name"]) e["user_name"] = "mayur jagtap";
          if (!e["upload_date"]) e["upload_date"] = "11 jan 2020";
        });
        setItems(data);
      })
      .catch((reject) =>
        console.log(reject + " may be net connection problem!")
      );
  }

  return (
    <div
      style={{
        width: window.innerWidth > 450 ? "400px" : "100%",
        margin: "auto",
      }}
    >
      {items ? (
        items.map((item) => <Post item={item} key={items.indexOf(item)} />)
      ) : (
        <section
          {...containerProps}
          style={{
            height: "100%",
            color: "#cc33ff",
            padding: "100px",
            textAlign: "center",
            top: "50px",
          }}
        >
          {indicatorEl}
        </section>
      )}
    </div>
  );
};

export default CardComponet;
