import InputBar from "../../components/InputBar/InputBar";
import MessagesBox from "../../components/MessagesBox/MessagesBox";
import { useAppSelector } from "../../hooks";
import "./Chat.scss";

function Chat() {
  const messagesList = useAppSelector((state) => state.messages.messages);

  return (
    <div className="chatContainer">
      <MessagesBox messages={messagesList} />
      <InputBar messages={messagesList} />
    </div>
  );
}

export default Chat;
