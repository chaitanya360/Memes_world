import { React, useState, useEffect } from "react";
import { useLoading, ThreeDots } from "@agney/react-loading";
import Post from "./post.js";

const CardComponet = () => {
  const [items, setItems] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="200" />,
  });

  function fetchData() {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("access")
    );

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://chaitanya360.pythonanywhere.com/api/images/")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        if (data.detail) {
          console.log("login not done!");
        } else {
          console.log(data);

          setItems(data);
        }
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
