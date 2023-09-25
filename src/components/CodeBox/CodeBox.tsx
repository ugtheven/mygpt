import { useCallback, useState } from "react";
import { LuClipboard } from "react-icons/lu";
import { AiOutlineCheck } from "react-icons/ai";
import { CodeBlock, irBlack } from "react-code-blocks";
import "./CodeBox.scss";

interface CodeBoxProps {
  paragraph: string;
  type: string;
}
function CodeBox({ paragraph, type }: CodeBoxProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((content: string) => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }, []);

  return (
    <div className="codeBox">
      <div className="codeHeader">
        <div>{type || "bash"}</div>
        <div className="copyButton" onClick={() => copyToClipboard(paragraph)}>
          {!isCopied && (
            <>
              <LuClipboard /> Copy code
            </>
          )}
          {isCopied && (
            <>
              <AiOutlineCheck /> Copied
            </>
          )}
        </div>
      </div>
      <CodeBlock
        language={type}
        text={paragraph}
        showLineNumbers={false}
        theme={irBlack}
        wrapLongLines={false}
      />
    </div>
  );
}

export default CodeBox;
