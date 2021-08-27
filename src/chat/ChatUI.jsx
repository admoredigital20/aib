import React, { useState ,useRef} from "react";
import "./ChatUI.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";

function ChatUI({ user }) {
  const userSignin = useSelector(state => state.userSignin)
    const { loading, error, userInfo } = userSignin

  const [message, setMessage] = useState("");
  const firestore = firebase.firestore();
  const lastmessage=useRef()
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const sendMessage = async (e) => {
    e.preventDefault();
    const messagesRef = firestore.collection("messages");
    const { user_id, name } = userInfo;
    await messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
       user_id ,
       name
    });
    setMessage("");
    lastmessage.current.scrollIntoView({behavior:"smooth"});
  };
  return (
    <div className="chat-window">
      <div className="messages">
        {messages &&
          messages.map((msg) => {
            const messageClass = msg.user_id  === userInfo.user_id  ? "sent" : "recieve";
            return (
              <div className={`message ${messageClass}`} key={msg.user_id }>
                <img
                  src={
                    msg.photoURL ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  }
                  alt=""
                />
                <h4>{msg.name}</h4>
                <p>{msg.text}</p>

              </div>
            );
          })}<span ref={lastmessage}></span>
      </div>
      
      <div className="inputSection">
        <form className="form1" onSubmit={sendMessage}>
          <input
            value={message}
            placeholder="type here....."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <img
            onClick={sendMessage}
            src="data:image/png;base64,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"
            alt="send"
          />
        </form>
      </div>
    </div>
  );
}

export default ChatUI;
