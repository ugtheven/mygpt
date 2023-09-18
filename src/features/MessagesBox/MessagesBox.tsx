import { useState } from "react";
import "./MessagesBox.scss";
import botAvatar from '../../assets/chatgpt.jpg'
import userAvatar from '../../assets/user.png'

function MessagesBox() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hello" },
    { sender: "bot", text: "Salut ! Je suis ChatGPT, un modèle de langage développé par OpenAI. Je suis conçu pour comprendre et générer du texte en fonction des informations que j'ai apprises au cours de mon entraînement, qui s'est arrêté en septembre 2021. Comment puis-je t'aider aujourd'hui ?" },
    { sender: "user", text: "Merci, maintenant dis m'en plus sur tes capacités." },
    { sender: "bot", text: "Cependant, il est important de noter que je n'ai pas de conscience, de sentiments ou de compréhension profonde du monde comme le font les humains. Mes réponses sont générées en fonction de modèles statistiques basés sur des exemples de texte que j'ai appris lors de mon entraînement. Si tu as des questions spécifiques ou besoin d'aide pour quelque chose en particulier, n'hésite pas à me demander !" },
    { sender: "user", text: "Merci, maintenant dis m'en plus sur tes capacités." },
  ]);

  return (
    <div className="messageContainer">
      {messages.map((message, index) => (
        <div className={`message ${message.sender === "bot" ? 'bot': ''}`} key={index}>
          {message.sender === "bot" &&
            <img src={botAvatar} height='32px' width='32px' />
          }
          {message.sender === "user" &&
            <img src={userAvatar} height='32px' width='32px' />
          }
          <div className="text">
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessagesBox;
