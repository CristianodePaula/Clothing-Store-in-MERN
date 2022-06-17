import { createSlice } from "@reduxjs/toolkit"

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    
    getmMessageStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getMessageSuccess: (state, action) => {
      state.isFetching = false
      state.messages = action.payload
    },
    getMessageFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    
    deleteMessageStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    deleteMessageSuccess: (state, action) => {
      state.isFetching = false
      state.messages.splice(
        state.messages.findIndex((message) => message._id === action.payload),
        1
      );
    },
    deleteMessageFailure: (state) => {
      state.isFetching = false
      state.error = true
    },

    },
  })

export const {
  getMessageStart,
  getMessageSuccess,
  getMessageFailure,
  deleteMessageStart,
  deleteMessageSuccess,
  deleteMessageFailure,
} = messageSlice.actions

export default messageSlice.reducer
