export function splitMarkdownInMessage(message: string) {
  const splitedMessage: { paragraph: string; type: string }[] = [];
  const lines = message.split("\n");

  let isMarkdown = false;
  let paragraph = "";
  let language = "";

  lines.forEach((line) => {
    if (!isMarkdown && line.startsWith("```")) {
      isMarkdown = true;
      splitedMessage.push({ paragraph, type: "text" });
      paragraph = "";
      language = line.slice(3);
    } else if (isMarkdown && line.startsWith("```")) {
      isMarkdown = false;
      splitedMessage.push({ paragraph, type: language });
      paragraph = "";
      language = "";
    } else if (!isMarkdown) paragraph += line + "\n";
    else if (isMarkdown) paragraph += line + "\n";
  });
  if (paragraph !== "") splitedMessage.push({ paragraph, type: "text" });
  return splitedMessage;
}
