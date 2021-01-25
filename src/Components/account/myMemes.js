import { React, useState, useEffect } from "react";
import { useLoading, ThreeDots } from "@agney/react-loading";
import Post from "../home/post";

const MyMemes = ({ uploaded }) => {
  const [items, setItems] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [!uploaded]);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="200" />,
  });

  function fetchData() {
    console.log("inside fetchdat of mymemes: ", localStorage.userId);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://chaitanya360.pythonanywhere.com/api/uploads/?id=" +
        localStorage.userId,
      requestOptions
    )
      .then((json) => json.json())
      .then((data) => {
        if (data.detail) {
          console.log("login not done!");
        } else {
          setItems(data);
        }
      })
      .catch((reject) =>
        console.log(reject + " may be net connection problem!")
      );
  }

  return (
    <div>
      {items.length > 0 ? (
        <div
          style={{
            width: "100%",
            height: "50px",
            color: "white",
            fontSize: 30,
            textAlign: "center",
            position: "sticky",
            top: "35px",
            backgroundColor: "black",
            backgroundImage:
              "radial-gradient(circle at 10% top, rgba(84,90,182,0.16) 0%, rgba(84,90,182,0) 95%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)",
            zIndex: 2,
          }}
        >
          My Uploads{" "}
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          // width: window.innerWidth > 450 ? "400px" : "100%",
          width: "100%",
          margin: "auto",
          display: window.innerWidth > 450 ? "flex" : "block",
          justifyContent: "space-evenly",
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
    </div>
  );
};

export default MyMemes;
