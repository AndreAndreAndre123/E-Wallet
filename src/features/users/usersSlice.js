import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let getUser = createAsyncThunk('user/getUser', async () => {
    let response = await fetch('https://randomuser.me/api/')
    let data = await response.json()
    return data
 })


 const usersSlice = createSlice({
    name: "user",
    initialState: {
        
    },
    reducers: {

    }

 })

 export const selectUser = (state) => state.user;
 export default usersSlice.reducer