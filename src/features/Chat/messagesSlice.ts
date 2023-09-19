import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Message {
  role: string,
  content: string
}

export interface MessagesState {
  messages: Message[]
}

const initialState: MessagesState = {
  messages: [
    { role: "user", content: "Hello" },
    { role: "system", content: "Salut ! Je suis ChatGPT, un modèle de langage développé par OpenAI. Je suis conçu pour comprendre et générer du texte en fonction des informations que j'ai apprises au cours de mon entraînement, qui s'est arrêté en septembre 2021. Comment puis-je t'aider aujourd'hui ?" },
  ],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<{ role: string ,content :string }>) => {
      state.messages.push({role: action.payload.role, content: action.payload.content})
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer