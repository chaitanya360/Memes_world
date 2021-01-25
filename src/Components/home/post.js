import { React, useState } from "react";
import ImageComponent from "./imageComponent.js";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import GetAppIcon from "@material-ui/icons/GetApp";
import laughingBigScr from "./assets/icons/laughing_big.png";
import { makeStyles } from "@material-ui/core/styles";
import laughingSrc from "./assets/icons/laughing.png";
import noughingSrc from "./assets/icons/noughing.png";
import Card from "@material-ui/core/Card";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import "./css/card.css";
import themeStyle from "../theme";

const themebgImage =
  "radial-gradient(circle at 10% top, rgba(184,90,182,0.16) 10%, rgba(184,90,182,0) 95%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)";
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️

    MuiCardHeader: {
      // Name of the rule
      subheader: {
        // Some CSS
        color: "rgba(255,255,255,0.6)",
      },
    },

    MuiCard: {
      root: {
        backgroundColor: themeStyle.purpleTheme.cardBgColor,
        backgroundImage: themebgImage,
        width: "100%",
        top: "10px",
        color: "white",
        marginTop: "30px",
        overflow: "hidden",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderWidth: "0px",
        alignContent: "center",
        maxWidth: 445,
        borderColor: "black",
      },
    },

    MuiCardContent: {
      root: {
        backgroundColor: "white",
      },
    },

    MuiCardActions: {
      root: {
        backgroundImage: themebgImage,
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
  },

  avatar: {
    backgroundColor: "purple",
    border: "1px solid black",
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

  function getFormatedDate(date_iso) {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    // const year = date_iso.substring(0, 4);
    const month = date_iso.substring(5, 7);
    const day_num = date_iso.substring(8, 10);
    const hour = date_iso.substring(11, 13);
    const minute = date_iso.substring(14, 16);
    return (
      day_num +
      " " +
      months[parseInt(month - 1)].toLowerCase() +
      " " +
      hour +
      ":" +
      minute
    );
  }

  function handleMemeLiked(mode) {
    if (mode === "double") {
      if (laughIcon !== laughingSrc) setLaughIcon(laughingSrc);
      setLaughingBigIconClass("laughingBing_visible");
      setTimeout(() => setLaughingBigIconClass("laughingBing_invisible"), 800);
    } else {
      if (laughIcon === laughingSrc) {
        setLaughIcon(noughingSrc);
        setLaughingBigIconClass("laughingBing_invisible");
      } else {
        setLaughIcon(laughingSrc);
        setLaughingBigIconClass("laughingBing_visible");
        setTimeout(() => {
          setLaughingBigIconClass("laughingBing_invisible");
        }, 800);
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
    <ThemeProvider theme={theme}>
      <Card
        onDoubleClick={() => handleMemeLiked("double")}
        style={{ margin: window.innerWidth > 450 ? "20px" : 0 }}
      >
        <CardHeader
          style={{ color: "white" }}
          className="p-2"
          avatar={
            <Avatar aria-label="name_logo" className={classes.avatar}>
              {item["author_name"][0]}
            </Avatar>
          }
          title={item["author_name"]}
          subheader={getFormatedDate(item["date"])}
        />

        <CardContent
          // className="cardBody"
          style={{
            padding: 0,
            paddingTop: "0px",
            position: "relative",
            widh: "100%",
            // backgroundColor: "rgba(255,255,255,1)",
          }}
        >
          <center>
            {" "}
            <img
              src={laughingBigScr}
              className={laughingBigIconClass}
              alt={laughingBigScr}
            ></img>{" "}
          </center>
          <ImageComponent
            style={{ position: "absolute" }}
            item={item}
          ></ImageComponent>
        </CardContent>
        <CardActions
          // style={{ padding: "0px", backgroundColor: "black" }}
          className="p-2"
        >
          <img
            className={classes.icon + " icon"}
            width={28}
            height={28}
            src={laughIcon}
            alt={laughIcon}
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
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default Post;
