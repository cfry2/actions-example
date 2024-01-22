import { configureStore } from '@reduxjs/toolkit'
import sumSlice from './reducers/sumSlice'

export const store = configureStore({
  reducer: {
    sum: sumSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch