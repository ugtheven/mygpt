import './Navbar.scss'
import { FiSidebar } from 'react-icons/fi'
import { BiPlusMedical } from 'react-icons/bi'
import userAvatar from '../../assets/user.png'
import { MdOutlineChatBubbleOutline } from 'react-icons/md'

const conversations = [
  { title: 'Conversation #1'},
  { title: 'Conversation #2'},
  { title: 'Conversation #3'},
  { title: 'Conversation #4'},
  { title: 'Conversation #5'},
]

function Navbar() {
  return (
    <div className='navbar'>
      {/* Buttons */}
      <div className='header'>
        <div className='newButton'>
          <BiPlusMedical color='white' size='16px' />
          <span>New Chat</span>
        </div>
        <div className='closeButton'>
         <FiSidebar color='white' size='16px' />
        </div>
      </div>
      {/* Conversations */}
      <div className='conversations'>
        {conversations.map((conversation, index) => (
          <div key={index} className='conversation'>
            <MdOutlineChatBubbleOutline color='white' size='16px' />
            <span>{conversation.title}</span>
          </div>
        ))}
      </div>
      {/* Profile */}
      <div className='profile'>
        <img src={userAvatar} alt='avatar' height='36px' width='36px'/>
        <span>Ugo Theveny</span>
      </div>
    </div>
  );
}
export default Navbar;