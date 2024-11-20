import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/Task.Slice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
})


