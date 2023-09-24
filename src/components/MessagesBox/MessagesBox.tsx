import "./MessagesBox.scss";
import { Message } from "../../features/Chat/messagesSlice";
import MessageBox from "./partials/MessageBox";

interface MessagesBoxProps {
  messages: Message[]
}
function MessagesBox({ messages }: MessagesBoxProps) {

  return (
    <div className="messagesContainer">
      {messages.map((message, index) => (
        <MessageBox message={message} key={index}/>
      ))}
    </div>
  );
}

export default MessagesBox;
