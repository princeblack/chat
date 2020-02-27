import React from "react";
import me from "../images/me.png";
import Come from "../images/Come.png";

//  const ChatContainer = (props) => {

//  }
class ChatContainer extends React.Component {
  render() {
    const data = this.props.message;

    const msgItems = data.map(el => {
      return (
        <div key={el.id} className="chat-box">
          <ul className={el.button ? `iAmUser${el.button}` : "iAmMyFriend"}>
            <span className="msgtimer">{el.time}</span>
            <li
              className={el.button ? "msg-container" : "friend-msg-container"}
            >
              <p className="message">{el.message}</p>
            </li>
            <img src={el.button ? `${me}` : `${Come}`} alt="me"></img>
          </ul>
        </div>
      );
    });
    return <div>{msgItems}</div>;
  }
}
export default ChatContainer;
