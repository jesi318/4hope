import React, { useMemo, useState } from "react";
import { PostSTatus, getPosts } from "../../../api/FirestoreAPIs";
import ModalComponent from "../Modal";
import PostsCard from "../PostsCard";
import { getCurrentTimeStamp } from "../../../helpers/useMonent";
import "./index.scss";

export default function PostStatus() {
  let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
    };

    await PostSTatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getPosts(setAllStatus);
  }, []);
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
