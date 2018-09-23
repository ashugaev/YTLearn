import React, { Component } from "react";
import { connect } from "react-redux";
import { skillAdd } from "../actions";

import * as firebase from "firebase";
import { storage } from "./Body";

import "./PopupAddSkill.scss";

class PopupAddSkill extends Component {
  constructor() {
    super();
    this.state = {
      imageName: null,
      iconLoadingProgress: "0%"
    };
  }

  render() {
    return (
      <div className="popupAddSkill__bg">
        <div className="popupAddSkill__content">
          <form onSubmit={this.onAddSkill}>
            <div className="popupAddSkill__inpTitle">Название для навыка</div>
            <input className="input popupAddSkill__inpName" name="title" />
            <div className="popupAddSkill__inpTitle">Иконка навыка</div>
            <input
              type="file"
              style={{ display: "none" }}
              name="icon"
              ref={fileInp => (this.fileInp = fileInp)}
              onChange={this.onInputFileChange}
            />
            <button
              className="btn btn_gray popupAddSkill__selectIcon"
              onClick={e => {
                e.preventDefault();
                this.fileInp.click();
              }}
            >
              {this.state.imageName || "Выбрать иконку"}
            </button>
            <div className="popupAddSkill__inpTitle">Описание</div>
            <textarea
              className="textarea popupAddSkill__inpDesctiption"
              name="description"
            />
            <input
              className="btn btn_red popupAddSkill__btnSubmit"
              type="submit"
              value="Готово"
            />
          </form>
        </div>
      </div>
    );
  }

  onInputFileChange = e => {
    const imageName = e.target.files[0].name;
    this.setState({ imageName });
    console.log("имя иконки", this.state.imageName);
    console.log("имя иконки", e.target.files[0].name);
    setTimeout(() => {
      console.log("имя иконки", this.state.imageName);
    }, 2000);
  };

  // Обработка добаления навыка
  onAddSkill = e => {
    e.preventDefault();
    const elements = e.target.elements;
    const image = elements.icon.files[0];

    // Загружаем изображение
    var uploadTask = firebase
      .storage()
      .ref(`skillsIcons/${image.name}`)
      .put(image);

    (elements => {
      // Отслеживаем прогресс загрузки и завершение
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progrss function ....
          const iconLoadingProgress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState(() => ({ iconLoadingProgress }));
        },
        error => {
          console.log(error);
        },
        () => {
          // complete function ....
          (elements => {
            storage
              .ref("skillsIcons")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                const titleValue = elements.title.value;
                const descriptionValue = elements.description.value;

                this.props.skillAdd({
                  name: titleValue,
                  icon: url,
                  desctiption: descriptionValue
                });
              });
          })(elements);
        }
      );
    })(elements);
  };

  handleUploadStart = () => {
    console.log("Загрузка началась");
  };

  handleUploadStart = data => {
    console.log("success", data);
  };
}

export default connect(
  null,
  { skillAdd }
)(PopupAddSkill);
