import "./MessageBox.scss";
import { Message } from "../../../features/Chat/messagesSlice";
import { CopyBlock, nord } from "react-code-blocks";
import { getAvatar } from "../../../utils/getAvatar";
import { splitMarkdownInMessage } from "../../../utils/splitMarkdownInMessage";

interface MessageBoxProps {
  message: Message
}
function MessageBox({ message }: MessageBoxProps) {
  const splitedMessage: { paragraph: string, type: string }[] = splitMarkdownInMessage(message.content)

  return (
    <div className={`messageContainer ${message.role === "system" ? 'bot': ''}`}>
      <img src={getAvatar(message.role)} height='32px' width='32px' />
      <div className="text">
        {splitedMessage.map((line, index) => (
          <div key={index}>
            {line.type !== 'text' &&
              <CopyBlock
                text={line.paragraph}
                showLineNumbers={false}
                codeBlock
                language={line.type}
                theme={nord}
              />
            }
            {line.type === 'text' &&
              <p>{line.paragraph}</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBox;