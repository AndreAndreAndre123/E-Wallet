import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk('user/getUser', async () => {
    let response = await fetch('https://randomuser.me/api/')
    let data = await response.json()
    return data
 })


 const usersSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {

    },
    extraReducers: {
      [getUser.fulfilled]: (state, action) => {
          state.user = action.payload.results[0]
          state.status = 'Found data!'
      }
   }
 })


 export default usersSlice.reducer