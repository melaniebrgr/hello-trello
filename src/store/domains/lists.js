import { createSlice } from '@reduxjs/toolkit'

export const lists = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    listCreated: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { listCreated } = lists.actions

export default lists.reducer