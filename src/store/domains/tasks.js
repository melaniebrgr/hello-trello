import { createSlice } from '@reduxjs/toolkit'
import { listDeleted } from './lists'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    taskCreated: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: {
    [String(listDeleted)]: (state, action) => {
      return state.filter(task => task.listId !== action.payload)
    }
  }
})

export const { taskCreated } = tasks.actions

export default tasks.reducer