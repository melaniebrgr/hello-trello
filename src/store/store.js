import { configureStore } from '@reduxjs/toolkit'
import listsReducer from "./domains/lists"

export default configureStore({
  reducer: {
    lists: listsReducer
  },
})