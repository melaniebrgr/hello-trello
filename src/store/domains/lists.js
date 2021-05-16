import { createSlice } from '@reduxjs/toolkit'

export const lists = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    listCreated: (state, action) => {
      state.push(action.payload)
    },
    listDelete: (state, action) => {
      const i = state.findIndex(list => list.id === action.payload)
      state.splice(i, 1);
    },
    listEdited: (state, action) => {
      const i = state.findIndex(list => list.id === action.payload.id)
      state[i].title = action.payload.title
    },
  },
})

export const { listCreated, listDelete, listEdited } = lists.actions

export default lists.reducer