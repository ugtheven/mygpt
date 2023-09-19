import { useRef, useState } from "react";
import "./InputBar.scss";
import { IoSend } from "react-icons/io5";
import { useAppDispatch } from "../../hooks";
import { addMessage } from "../../features/Chat/messagesSlice";
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

interface InputBarProps {
  messages: ChatCompletionMessageParam[]
}
function InputBar({ messages: messagesList }: InputBarProps) {
  const dispatch = useAppDispatch();
  const textareaRef: React.MutableRefObject<any> = useRef(null);

  const [height, setHeight] = useState("auto");
  const [value, setValue] = useState("");

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || "",
    dangerouslyAllowBrowser: true
  });

  const handleTextareaChange = (e) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    setHeight(element.style.height);
    setValue(element.value);
  };

  //When the user presses enter without shift, the textarea will not create a new line
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.length !== 0) {
        dispatch(addMessage({ role: 'user', content: value }));
        setValue("");
        textareaRef.current.value = "";
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: messagesList,
      });

      dispatch(addMessage({ role: "system", content: completion.choices[0].message.content || "" }));
    }
  };

  const handleClick = () => {
    if (value.length !== 0) {
      dispatch(addMessage({ role: 'user', content: value }));
      setValue("");
      textareaRef.current.value = "";
    }
  };


  return (
    <div className="inputContainer">
      <div className="input-box">
        <textarea
          ref={textareaRef}
          rows={1}
          className="textarea"
          placeholder="Send a message"
          style={{ height: height }}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
        ></textarea>

        <div className={`send ${value.length > 0 ? 'active' : ''}`} onClick={handleClick}><IoSend /></div>
      </div>
    </div>
  );
}

export default InputBar;
