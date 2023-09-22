import React from "react";
import "./MessagesBox.scss";
import botAvatar from '../../assets/chatgpt.jpg'
import userAvatar from '../../assets/user.png'
import { Message } from "../../features/Chat/messagesSlice";
import { CopyBlock, nord } from "react-code-blocks";

function getAvatar(role: string) {
  if (role === "system") {
    return botAvatar
  } else {
    return userAvatar
  }
}

function splitMarkdownInMessage(message: string) {
  const splitedMessage: { paragraph: string, type: string }[] = [];
  const lines = message.split('\n');

  let isMarkdown = false;
  let paragraph = '';
  let language = '';

  lines.forEach((line) => {
    if (!isMarkdown && line.startsWith('```')) {
      isMarkdown = true;
      splitedMessage.push({ paragraph, type: 'text' })
      paragraph = ''
      language = line.slice(3);
    }
    else if (isMarkdown && line.startsWith('```')) {
      isMarkdown = false;
      splitedMessage.push({ paragraph, type: language })
      paragraph = '';
      language = '';
    }
    else if (!isMarkdown)
      paragraph += line + '\n'
    else if (isMarkdown)
      paragraph += line + '\n'
  })
  if (paragraph !== '')
    splitedMessage.push({ paragraph, type: 'text' })
  return splitedMessage
}

interface MessageProps {
  message: Message
}
function MessageBox({ message }: MessageProps) {
  const splitedMessage: { paragraph: string, type: string }[] = splitMarkdownInMessage(message.content)

  return (
    <div className={`message ${message.role === "system" ? 'bot': ''}`}>
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

interface MessagesBoxProps {
  messages: Message[]
}
function MessagesBox({ messages }: MessagesBoxProps) {

  return (
    <div className="messageContainer">
      {messages.map((message, index) => (
        <MessageBox message={message} key={index}/>
      ))}
    </div>
  );
}

export default MessagesBox;
