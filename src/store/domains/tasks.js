import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    taskCreated: (state, action) => {
      state.push(action.payload)
    }
  },
})

export const { taskCreated } = tasks.actions

export default tasks.reducer