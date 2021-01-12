import React, { Component, useState, useEffect } from "react";
import NavBarComponent from "./Components/navBar";
import CardComponet from "./Components/cardComponent";
import Header from "./Components/headerComponent";
import "./App.css";

const WorkArea = () => {
  const [items, setItems] = useState([]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    console.log("use Effect is called");
    fetchData();
  }, []);

  function getCardWidth() {
    if (window.innerWidth > 450) return "400px";
    else {
      return "100%";
    }
  }

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
        console.log(reject + " may be net connection proble!")
      );
  }

  return (
    <div style={{ display: "grid" }}>
      <Header />
      <NavBarComponent />
      {/* <Loading /> */}

      <div style={{ width: getCardWidth(), margin: "auto" }}>
        {items.map((item) => (
          <CardComponet item={item} key={items.indexOf(item)}></CardComponet>
        ))}
      </div>
    </div>
  );
};

export default WorkArea;
