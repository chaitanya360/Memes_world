import React from "react";
import "./css/card.css";
import { Card } from "react-bootstrap";
import useIntersectionObserver from "./observer.js";
import Image from "./image";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import GetAppIcon from "@material-ui/icons/GetApp";
import laughingSrc from "./assets/icons/laughing.png";
import noughingSrc from "./assets/icons/noughing.png";
import laughingBigScr from "./assets/icons/laughing_big.png";

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
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const CardComponet = (props) => {
  const classes = useStyles();

  const { item } = props;

  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  const [laughIcon, setLaughIcon] = React.useState(noughingSrc);
  const [laughingBigIconClass, setLaughingBigIconClass] = React.useState(
    "laughingBing_invisible"
  );

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

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  async function handleDownload(imgurl, imgname) {
    fetch(imgurl).then((response) => {
      response.blob({ type: "image/png" }).then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = imgname + ".png";
        a.click();
      });
      //window.location.href = response.url;
    });
  }

  return (
    <React.Fragment>
      <Card
        className={classes.root}
        bg="danger"
        onDoubleClick={() => handleMemeLiked("double")}
        style={{
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
        }}
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
          <div ref={ref}>
            {isVisible && (
              <Image
                src={"https://chaitanya360.pythonanywhere.com/" + item["img"]}
                style={{
                  borderRadius: "0px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottom: "1px solid grey",
                  maxHeight: "800px",
                  minHeight: "0px",
                  position: "relative",
                  display: "inline",
                  overflow: "hidden",
                }}
              ></Image>
            )}
          </div>
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
    </React.Fragment>
  );
};

export default CardComponet;
