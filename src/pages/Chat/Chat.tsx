import InputBar from "../../components/InputBar/InputBar";
import MessagesBox from "../../components/MessagesBox/MessagesBox";
import "./Chat.scss";

function Chat() {

  return (
    <div className="chatContainer">
      <MessagesBox />
      <InputBar />
    </div>
  );
}

export default Chat;
