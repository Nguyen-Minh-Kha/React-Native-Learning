import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { auth, firestore } from "./firebase";
import { doc } from "firebase/firestore";
const createUser = async (email, username, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((reponse) => {
      console.log(reponse);
      const ref = doc(firestore, "users", reponse.user.uid);
      setDoc(ref, { email, username })
        .then((rep) => {
          console.log(rep);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default createUser;
