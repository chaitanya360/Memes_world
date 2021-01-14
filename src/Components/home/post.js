import { React, useState } from "react";
import ImageComponent from "./imageComponent.js";
import { Card } from "react-bootstrap";
import "./css/card.css";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import GetAppIcon from "@material-ui/icons/GetApp";
import laughingBigScr from "./assets/icons/laughing_big.png";
import { makeStyles } from "@material-ui/core/styles";
import { red, black } from "@material-ui/core/colors";
import laughingSrc from "./assets/icons/laughing.png";
import noughingSrc from "./assets/icons/noughing.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 0,
  },

  avatar: {
    backgroundColor: red[500],
    border: "1px solid red",
  },

  paddingless: {
    padding: 0,
    marginLeft: "5px",
  },

  icon: {
    color: "white",
    marginLeft: "10px",
  },
}));

const Post = ({ item }) => {
  const classes = useStyles();
  const [laughIcon, setLaughIcon] = useState(noughingSrc);
  const [laughingBigIconClass, setLaughingBigIconClass] = useState(
    "laughingBing_invisible"
  );

  const [cardStyle, getCardStyle] = useState({
    backgroundColor: "rgba(2,4,43,0.4)",
    width: "100%",
    borderWidth: "2px",
    top: "10px",
    color: "white",
    marginTop: "30px",
    overflow: "hidden",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    alignContent: "center",
  });

  function handleMemeLiked(mode) {
    if (mode == "double") {
      if (laughIcon != laughingSrc) setLaughIcon(laughingSrc);
      setLaughingBigIconClass("laughingBing_visible");
      setTimeout(() => setLaughingBigIconClass("laughingBing_invisible"), 1000);
    } else {
      if (laughIcon == laughingSrc) {
        setLaughIcon(noughingSrc);
        setLaughingBigIconClass("laughingBing_invisible");
      } else {
        setLaughIcon(laughingSrc);
        setLaughingBigIconClass("laughingBing_visible");
        setTimeout(
          () => setLaughingBigIconClass("laughingBing_invisible"),
          1000
        );
      }
    }
  }

  async function handleDownload(imgurl, imgname) {
    fetch(imgurl).then((response) => {
      response.blob({ type: "image/png" }).then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = imgname + ".png";
        a.click();
      });
    });
  }

  return (
    <Card
      className={classes.root}
      bg="danger"
      onDoubleClick={() => handleMemeLiked("double")}
      style={cardStyle}
    >
      <img src={laughingBigScr} className={laughingBigIconClass}></img>

      <CardHeader
        className="p-2"
        avatar={
          <Avatar aria-label="name_logo" className={classes.avatar}>
            {item["user_name"][0]}
          </Avatar>
        }
        title={item["user_name"]}
        subheader={item["upload_date"]}
      />

      <Card.Body
        // className="cardBody"
        style={{
          padding: 0,
          paddingTop: "0px",
          backgroundColor: "rgba(255,255,255,1)",
        }}
      >
        <ImageComponent item={item} />
      </Card.Body>
      <Card.Footer
        // style={{ padding: "0px", backgroundColor: "black" }}
        className="p-2"
      >
        <img
          className={classes.icon + { laughingBigIconClass } + " icon"}
          width={28}
          height={28}
          src={laughIcon}
          onClick={() => handleMemeLiked("touch")}
        ></img>
        <ShareIcon className={classes.icon + " icon"} />
        <GetAppIcon
          className={classes.icon + " icon"}
          style={{ float: "right", fontSize: 25 }}
          onClick={() =>
            handleDownload(
              "https://chaitanya360.pythonanywhere.com/" + item["img"],
              item["img"]
            )
          }
        />
      </Card.Footer>
    </Card>
  );
};

export default Post;
