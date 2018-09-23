import * as firebase from "firebase";

export const getSkills = () => {
  firebase
    .database()
    .ref()
    .once("value")
    .then(data => {
      console.log("firebaseData", data);
    })

    .catch(error => {
      console.log(error);
    });
};
