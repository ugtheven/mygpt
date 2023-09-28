import { useCallback, useRef, useState } from "react";
import "./InputBar.scss";
import { IoSend } from "react-icons/io5";
import { useAppDispatch } from "../../hooks";
import {
  Message,
  addMessage,
  setIsTyping,
} from "../../features/Chat/messagesSlice";
import axios from "axios";

interface InputBarProps {
  messages: Message[];
}
function InputBar({ messages }: InputBarProps) {
  const dispatch = useAppDispatch();
  const textareaRef: React.MutableRefObject<any> = useRef(null);

  const [height, setHeight] = useState("auto");
  const [value, setValue] = useState("");

  //Send the message to the bot and get the response
  const getBotResponse = useCallback(async () => {
    const newConv = [...messages, { role: "user", content: value }];

    try {
      dispatch(setIsTyping());

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: newConv,
        },
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_OPENAI_API_KEY || ""
            }`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(
        addMessage({
          role: "system",
          content: response.data.choices[0].message.content,
        })
      );
    } catch (error) {
      console.log("error", error);
    } finally {
      dispatch(setIsTyping());
    }
  }, [messages, value]);

  //Handle the height of the textarea and retrieve the value
  const handleTextareaChange = useCallback((e: any) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    setHeight(element.style.height);
    setValue(element.value);
  }, []);

  //When the user presses enter without shift, the textarea will not create a new line
  const handleKeyDown = useCallback(
    async (e: any) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (value.length !== 0) {
          dispatch(addMessage({ role: "user", content: value }));
          setValue("");
          textareaRef.current.value = "";
          getBotResponse();
        }
      }
    },
    [value]
  );

  //Send button callback
  const handleClick = useCallback(() => {
    if (value.length !== 0) {
      dispatch(addMessage({ role: "user", content: value }));
      setValue("");
      textareaRef.current.value = "";
      getBotResponse();
    }
  }, [value]);

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

        <div
          className={`send ${value.length > 0 ? "active" : ""}`}
          onClick={handleClick}
        >
          <IoSend />
        </div>
      </div>
    </div>
  );
}

export default InputBar;
