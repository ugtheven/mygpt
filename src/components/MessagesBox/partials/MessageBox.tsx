import "./MessageBox.scss";
import { Message } from "../../../features/Chat/messagesSlice";
// import { CodeBlock, irBlack } from "react-code-blocks";
import { getAvatar } from "../../../utils/getAvatar";
import { splitMarkdownInMessage } from "../../../utils/splitMarkdownInMessage";
import CodeBox from "../../CodeBox/CodeBox";

interface MessageBoxProps {
  message: Message;
}
function MessageBox({ message }: MessageBoxProps) {
  const splitedMessage: { paragraph: string; type: string }[] =
    splitMarkdownInMessage(message.content);

  return (
    <div
      className={`messageContainer ${message.role === "system" ? "bot" : ""}`}
    >
      <img src={getAvatar(message.role)} height="36px" width="36px" />
      <div className="text">
        {splitedMessage.map((line, index) => (
          <div key={index}>
            {line.type !== "text" && (
              <CodeBox paragraph={line.paragraph} type={line.type} />
            )}
            {line.type === "text" && <p>{line.paragraph}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBox;
