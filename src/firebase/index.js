import * as firebase from "firebase";

export const getSkills = () => {
  return new Promise(resolve => {

    firebase
      .database()
      .ref()
      .once("value")
      .then(data => {
        resolve(data.val());
      })

      .catch(error => {
        console.log(error);
      });
  })
};

const firebaseInit = () => {
  return new Promise(resolve => {
    let result = []
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
        querySnapshot.forEach(doc => {
          result.push(doc.data())
        });
        resolve(result);
      });
  })
};

export default firebaseInit;
