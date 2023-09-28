import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  role: string;
  content: string;
}
export interface MessagesState {
  messages: Message[];
  isTyping: boolean;
}

const initialState: MessagesState = {
  messages: [],
  isTyping: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setIsTyping: (state) => {
      state.isTyping = !state.isTyping;
    },
  },
});

export const { addMessage, setIsTyping } = messagesSlice.actions;

export default messagesSlice.reducer;
