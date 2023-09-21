import "./MessagesBox.scss";
import botAvatar from '../../assets/chatgpt.jpg'
import userAvatar from '../../assets/user.png'
import { Message } from "../../features/Chat/messagesSlice";

interface MessagesBoxProps {
  messages: Message[]
}
function MessagesBox({ messages }: MessagesBoxProps) {

  return (
    <div className="messageContainer">
      {messages.map((message, index) => (
        <div className={`message ${message.role === "system" ? 'bot': ''}`} key={index}>
          {message.role === "system" &&
            <img src={botAvatar} height='32px' width='32px' />
          }
          {message.role === "user" &&
            <img src={userAvatar} height='32px' width='32px' />
          }
          <div className="text">
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessagesBox;
