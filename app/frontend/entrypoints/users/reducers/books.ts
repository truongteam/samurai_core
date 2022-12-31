import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    bookList: []
  },
  reducers: {
    getBookSuccess: (state, action) => console.log(action.payload),
    getBookFailure: (state, action) => console.log(action.payload),
    setLoading: (state, action) => ({ ...state, loadingTarget: (action as any).loadingTarget, loadingType: (action as any).loadingType })
  }
})

export const { getBookSuccess, getBookFailure, setLoading } = bookSlice.actions;

export default bookSlice.reducer;