import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api'

export const getFriendsThunk=createAsyncThunk("/getfriends",async(_,{rejectWithValue})=>{
    try {
        console.log("started fetching friends");
        const response= await api.getFriends();
        console.log(response.data);
        return response.data;
     } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data)
     }
})

export const getMyFriendsThunk=createAsyncThunk("/getmyfriends",async(formData,{rejectWithValue})=>{
    try {
        console.log("started fetching your friends");
        const response= await api.getmyfriends(formData);
        console.log(response.data);
        return response.data;
     } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data)
     }
})



const friendSlice=createSlice({
    name:'friend',
    initialState:{
       data:null,
       loading:false,
       error:null,
       friends:null
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getFriendsThunk.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(getFriendsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getFriendsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // for users friends

        .addCase(getMyFriendsThunk.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(getMyFriendsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.friends = action.payload;
        })
        .addCase(getMyFriendsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default friendSlice.reducer;