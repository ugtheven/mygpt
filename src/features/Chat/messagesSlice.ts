import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChatCompletionMessageParam } from 'openai/resources/chat/index.mjs'

export interface MessagesState {
  messages: ChatCompletionMessageParam[]
}

const initialState: MessagesState = {
  messages: [
    {role: "user", content: "Hello, shortly tell me who are you?"},
  ],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatCompletionMessageParam>) => {
      state.messages.push({role: action.payload.role, content: action.payload.content})
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer