import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Message {
  role: string
  content: string
}
export interface MessagesState {
  messages: Message[]
}

const initialState: MessagesState = {
  messages: [],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      const newMessage: Message = action.payload;
      state.messages.push(newMessage);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer