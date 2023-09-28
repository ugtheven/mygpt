import "./MessagesBox.scss";
import { Message } from "../../features/Chat/messagesSlice";
import MessageBox from "./partials/MessageBox";
import { useAppSelector } from "../../hooks";

interface MessagesBoxProps {
  messages: Message[];
}
function MessagesBox({ messages }: MessagesBoxProps) {
  const isTyping = useAppSelector((state) => state.messages.isTyping);

  return (
    <div className="messagesContainer">
      {messages.map((message, index) => (
        <MessageBox message={message} key={index} />
      ))}
      {isTyping && <MessageBox message={{ role: "system", content: "" }} />}
    </div>
  );
}

export default MessagesBox;
