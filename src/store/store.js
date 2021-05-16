import { configureStore } from '@reduxjs/toolkit'
import listsReducer from './domains/lists'
import tasksReducer from './domains/tasks'

export default configureStore({
  reducer: {
    lists: listsReducer,
    tasks: tasksReducer
  },
})