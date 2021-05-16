import { createSlice } from '@reduxjs/toolkit'
import { listDeleted } from './lists'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    taskCreated: (state, action) => {
      state.push(action.payload)
    },
    taskDeleted: (state, action) => {
      const i = state.findIndex(task => task.id === action.payload)
      state.splice(i, 1);
    },
  },
  extraReducers: {
    [String(listDeleted)]: (state, action) => {
      return state.filter(task => task.listId !== action.payload)
    }
  }
})

export const { taskCreated, taskDeleted } = tasks.actions

export default tasks.reducer