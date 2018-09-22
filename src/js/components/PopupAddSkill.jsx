import React, { Component } from "react";
import { connect } from "react-redux";

import "./PopupAddSkill.scss";

import { skillAdd } from "../actions";

import * as firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

import { storage } from "./Body";

class PopupAddSkill extends Component {
  render() {
    return (
      <div className="popupAddSkill__bg">
        {console.log(this.props)}
        <div className="popupAddSkill__content">
          <form onSubmit={this.onAddSkill}>
            <div className="popupAddSkill__inpTitle">Название для навыка</div>
            <input className="popupAddSkill__inpName" name="title" />
            <div className="popupAddSkill__inpIcon">Иконка навыка</div>
            {/* <FileUploader
              accept="images/*"
              name="icon"
              randomizeFilename
              storageRef={firebase.storage().ref('skillsIcons')}
              onUploadStart={this.handleUploadStart}
              onUploadSuccess={this.handleUploadStart}
            /> */}

            <input
              type="file"
              className="popupAddSkill__selectIcon"
              name="icon"
            />
            <div className="popupAddSkill__inpTitle">Описание</div>
            <textarea
              className="popupAddSkill__inpDesctiption"
              name="description"
            />
            <input
              className="popupAddSkill__btnSubmit"
              type="submit"
              value="Готово"
            />
          </form>
        </div>
      </div>
    );
  }

  onAddSkill = e => {
    e.preventDefault();
    const image = e.target.elements.icon.files[0];
    var uploadTask = firebase
      .storage()
      .ref(`skillsIcons/${image.name}`)
      .put(image);
    ////////////
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Прогресс", progress);
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("skillsIcons")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log("url", url);
            this.props.skillAdd({
                name: "Вжух",
                icon: url,
                desctiption: ";ljkl;jk",
              });
          });
      }
    );
    /////////

    console.log(e.target.elements.title.value);
    console.log(e.target.elements.icon.files[0]);
    // this.props.skillAdd({
    //   name: "Вжух",
    //   icon: "asdf",
    //   desctiption: ";ljkl;jk"
    // });
  };

  handleUploadStart = () => {
    console.log("Загрузка началась");
  };

  handleUploadStart = data => {
    console.log("success", data);
    //   gs://ytlearn-215919.appspot.com/skillsIcons/14ed6259-46ba-4f94-b1ea-4efcead0e526.jpg
  };
}

export default connect(
  null,
  { skillAdd }
)(PopupAddSkill);
