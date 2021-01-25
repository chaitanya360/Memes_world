import React, { Component, useState } from "react";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
// import "./App.css";

class UploadImage extends Component {
  state = {
    selectedFile: null,
    imagePreviewUrl: null,
    uploading: false,
    uploadSuccess: false,
  };

  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      uploadSuccess: false,
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  submit = () => {
    this.setState({ uploading: true });
    var fd = new FormData();

    fd.append("img", this.state.selectedFile);
    fd.append("author", localStorage.getItem("userId"));

    var request = new XMLHttpRequest();

    // request.onreadystatechange = function () {
    //   if (this.readyState === 4 && this.status === 200) {
    //   }
    // };

    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        this.setState({ uploading: false });
        if (request.status === 200) {
          this.setState({ uploadSuccess: true });
          this.props.setuploaded(true);
        }
      }
    };

    request.open(
      "POST",
      "https://chaitanya360.pythonanywhere.com/api/images/",
      true
    );
    request.send(fd);
  };

  render() {
    let $updateButton;
    let $imagePreview = (
      <div className="previewText image-container">Upload Meme</div>
    );
    if (this.state.imagePreviewUrl) {
      $imagePreview = (
        <div className="image-container">
          <img src={this.state.imagePreviewUrl} alt="icon" width="200" />{" "}
        </div>
      );

      $updateButton = (
        <button
          href="#login"
          className="ui-button inactive login"
          onClick={this.submit}
        >
          {!this.state.uploading && <span>Post</span>}
          {this.state.uploading && <span>Posting... </span>}
        </button>
      );
    }

    return (
      <div
        style={{
          height: "100%",
          width: window.innerWidth < 500 ? "100%" : "400px",
          margin: "auto",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="ui-panel login-panel animated bounceInDown"
          style={{ height: "100%", margin: "auto", position: "relative" }}
        >
          <div className="login-form pb-0">
            <div>
              <PublishRoundedIcon
                style={{ fontSize: "100" }}
              ></PublishRoundedIcon>
              <input
                type="file"
                onChange={this.fileChangedHandler}
                style={{
                  position: "absolute",
                  left: "0px",
                  zIndex: "1",
                  opacity: "0",
                  height: "100px",
                  width: "100px",
                  marginLeft: "20px",
                }}
              ></input>

              {!this.state.uploadSuccess && (
                <div className="mt-4">{$imagePreview}</div>
              )}
              {this.state.uploadSuccess && <div> Uploaded!</div>}
            </div>
          </div>

          <footer style={{ pading: "0px" }}>
            <div className="left form-actions">{$updateButton}</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default UploadImage;
