import "./Navbar.scss";
import userAvatar from "../../assets/user.png";
// Icons
import { FiSidebar } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { RiMoreFill } from "react-icons/ri";

const conversations = [
  {
    title: "Conversation #1 - Test de long titre",
    active: true,
    date: "28/09/2023",
  },
  { title: "Conversation #2", active: false, date: "27/09/2023" },
  { title: "Conversation #3", active: false, date: "26/09/2023" },
  { title: "Conversation #4", active: false, date: "25/09/2023" },
  { title: "Conversation #5", active: false, date: "24/09/2023" },
  { title: "Conversation #6", active: false, date: "24/09/2023" },
  { title: "Conversation #7", active: false, date: "24/09/2023" },
  { title: "Conversation #8", active: false, date: "24/09/2023" },
  { title: "Conversation #9", active: false, date: "24/09/2023" },
  { title: "Conversation #10", active: false, date: "12/09/2023" },
  { title: "Conversation #11", active: false, date: "12/09/2023" },
  { title: "Conversation #12", active: false, date: "12/09/2023" },
  { title: "Conversation #13", active: false, date: "12/09/2023" },
  { title: "Conversation #14", active: false, date: "12/09/2023" },
  { title: "Conversation #15", active: false, date: "12/09/2023" },
  { title: "Conversation #16", active: false, date: "12/09/2023" },
  { title: "Conversation #17", active: false, date: "24/07/2023" },
  { title: "Conversation #18", active: false, date: "24/07/2023" },
  { title: "Conversation #19", active: false, date: "24/07/2023" },
  { title: "Conversation #20", active: false, date: "24/07/2023" },
];

// Function that split conversation by date in 3 arrays one for today, one for yesterday and one for the rest
function splitConversationsByDate(conversations: any) {
  const today = new Date().toLocaleDateString();
  const yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toLocaleDateString();
  const conversationsByDate = {
    today: conversations.filter(
      (conversation: any) => conversation.date === today
    ),
    yesterday: conversations.filter(
      (conversation: any) => conversation.date === yesterday
    ),
    previous: conversations.filter(
      (conversation: any) =>
        conversation.date !== today && conversation.date !== yesterday
    ),
  };
  console.log(conversationsByDate);
  return conversationsByDate;
}
splitConversationsByDate(conversations);

function Navbar() {
  const datedConversations = splitConversationsByDate(conversations);

  return (
    <div className="navbar">
      {/* Buttons */}
      <div className="header">
        <div className="newButton">
          <BiPlus color="white" size="16px" />
          <span>New Chat</span>
        </div>
        <div className="closeButton">
          <FiSidebar color="white" size="16px" />
        </div>
      </div>

      {/* Conversations */}
      <div className="conversations">
        {/* Today */}
        {datedConversations.today.length > 0 && (
          <>
            <div className="date">Today</div>
            {datedConversations.today.map((conversation: any, index: number) => (
              <div
                key={index}
                className={`conversation ${
                  conversation.active ? "active" : ""
                }`}
              >
                <MdOutlineChatBubbleOutline color="white" size="16px" />
                <span>{conversation.title}</span>
                {conversation.active && (
                  <>
                    <FiEdit3 className="button" color="#c5c5d2" size="16px" />
                    <LuTrash2 className="button" color="#c5c5d2" size="16px" />
                  </>
                )}
              </div>
            ))}
          </>
        )}
        {/* Yesterday */}
        {datedConversations.yesterday.length > 0 && (
          <>
            <div className="date">Today</div>
            {datedConversations.yesterday.map((conversation: any, index: number) => (
              <div
                key={index}
                className={`conversation ${
                  conversation.active ? "active" : ""
                }`}
              >
                <MdOutlineChatBubbleOutline color="white" size="16px" />
                <span>{conversation.title}</span>
                {conversation.active && (
                  <>
                    <FiEdit3 className="button" color="#c5c5d2" size="16px" />
                    <LuTrash2 className="button" color="#c5c5d2" size="16px" />
                  </>
                )}
              </div>
            ))}
          </>
        )}
        {/* Previous */}
        {datedConversations.previous.length > 0 && (
          <>
            <div className="date">Previous days</div>
            {datedConversations.previous.map((conversation: any, index: number) => (
              <div
                key={index}
                className={`conversation ${
                  conversation.active ? "active" : ""
                }`}
              >
                <MdOutlineChatBubbleOutline color="white" size="16px" />
                <span>{conversation.title}</span>
                {conversation.active && (
                  <>
                    <FiEdit3 className="button" color="#c5c5d2" size="16px" />
                    <LuTrash2 className="button" color="#c5c5d2" size="16px" />
                  </>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      {/* Profile */}
      <div className="footer">
        <div className="profile">
          <img src={userAvatar} alt="avatar" height="36px" width="36px" />
          <span>Ugo Theveny</span>
          <RiMoreFill color="white" size="16px" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
