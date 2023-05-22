import React, { useMemo, useState } from "react";
import { PostSTatus, getPosts } from "../../../api/FirestoreAPIs";
import ModalComponent from "../Modal";
import PostsCard from "../PostsCard";
import { getCurrentTimeStamp } from "../../../helpers/useMonent";
import "./index.scss";
import { getCurrentUser } from "../../../api/FirestoreAPIs";
import { toast } from "react-toastify";
import { firestore } from "../../../firebaseConfig";
import { getUniqueID } from "../../../helpers/getUniqueID";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

export default function PostStatus({}) {
  // console.log(currentUser);
  let userRef = collection(firestore, "users");
  let userEmail = localStorage.getItem("userEmail");
  const [currentUser, setCurrentUser] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueID(),
    };

    await PostSTatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getPosts(setAllStatus);
    getCurrentUser(setCurrentUser);
    // const currUser = onSnapshot(userRef, (response) => {
    //   response.docs
    //     .map((docs) => {
    //       return { ...docs.data(), id: docs.id };
    //     })
    //     .filter((item) => {
    //       return item.email === localStorage.getItem("userEmail");
    //     })[0];
    // });

  }, [currentUser.name]);
  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>
      <ModalComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setStatus={setStatus}
        status={status}
        sendStatus={sendStatus}
      />

      {allStatuses.map((posts) => {
        return <PostsCard posts={posts} />;
      })}
    </div>
  );
}
