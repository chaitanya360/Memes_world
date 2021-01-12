import React from "react";

const Header = () => {
  return (
    <center>
      <div
        style={{
          backgroundColor: "#3B2F63",
          backgroundImage:
            "radial-gradient(circle at 50% top, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)",
          color: "white",
        }}
      >
        <h1 style={{ margin: 0, padding: "10px" }}>
          <i
            style={{
              textShadow: "1px 1px purple",
              fontFamily: "fantasy",
              color: "white",
            }}
          >
            Memes
          </i>
          <i style={{ fontFamily: "cursive", textShadow: "1px 1px 2px black" }}>
            _World
          </i>
        </h1>
      </div>
    </center>
  );
};

export default Header;
