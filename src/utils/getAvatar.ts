import botAvatar from '../assets/chatgpt.jpg'
import userAvatar from '../assets/user.png'

export function getAvatar(role: string) {
  if (role === "system") {
    return botAvatar
  } else {
    return userAvatar
  }
}
