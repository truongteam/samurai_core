import { configureStore } from '@reduxjs/toolkit'
import { middleWare, apiReducer, railsActions } from 'redux-rails'

import books from './reducers/books'

const apiConfig = {
    baseUrl: 'https://your-site-url.com/api/',
    resources: {
      Todos: {
        controller: 'todos'
      }
    }
}

export const store = configureStore({
  reducer: {
    books,
    resources: apiReducer(apiConfig) // auto-generates reducers
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch