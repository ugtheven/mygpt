import InputBar from "../../components/InputBar/InputBar";
import MessagesBox from "../../components/MessagesBox/MessagesBox";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./Chat.scss";

function Chat() {
  const messagesList = useAppSelector((state) => state.messages.messages);
  const dispatch = useAppDispatch();

  return (
    <div className="chatContainer">
      <MessagesBox messages={messagesList} />
      <InputBar/>
    </div>
  );
}

export default Chat;
