import { useState } from "react";
import "./InputBar.scss";
import { IoSend } from "react-icons/io5";

function InputBar() {
  const [height, setHeight] = useState("auto");
  const [value, setValue] = useState("");

  const handleTextareaChange = (e) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    setHeight(element.style.height);
    setValue(element.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };


  return (
    <div className="container">
      <div className="input-box">
        <textarea
          rows={1}
          className="textarea"
          placeholder="Send a message"
          style={{ height: height }}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
        ></textarea>

        <div className={`send ${value.length > 0 ? 'active' : ''}`}><IoSend /></div>
      </div>
    </div>
  );
}

export default InputBar;
