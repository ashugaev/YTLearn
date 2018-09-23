import * as firebase from "firebase";

export const getSkills = () => {
  firebase
    .database()
    .ref()
    .once("value")
    .then(data => {
      console.log("firebaseData", data.val());
    })

    .catch(error => {
      console.log(error);
    });
};

const firebaseInit = () => {
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });

  //firestore
  db.collection("skills")
    .get()
    .then(querySnapshot => {
      console.log(querySnapshot)
      querySnapshot.docs[0].exists && console.log("fireStore", querySnapshot.docs[0].data());
    });
};

export default firebaseInit;
