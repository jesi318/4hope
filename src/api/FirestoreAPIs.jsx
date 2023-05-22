import { toast } from "react-toastify";
import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

export const PostSTatus = (object) => {
  addDoc(postsRef, object)
    .then(() => {
      toast.success("Document added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPosts = (setAllStatus) => {
  onSnapshot(postsRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
    );

    // console.log(
    //   response.docs
    //     .map((docs) => {
    //       return { ...docs.data(), id: docs.id };
    //     })
    //     .filter((item) => {
    //       return item.email === localStorage.getItem("userEmail");
    //     })[0]
    // );
  });
};
