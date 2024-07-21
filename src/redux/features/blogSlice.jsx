import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api'

export const getBlogsThunk=createAsyncThunk("/getBlogs", async(_,{rejectWithValue})=>{
     try {
        console.log("started fetching blogs");
        const response= await api.getBlogs();
        console.log(response.data);
        return response.data;
     } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data)
     }
})


const blogSlice=createSlice({
    name:'blog',
    initialState:{
       data:null,
       loading:false,
       error:null,
       blogCreationResponse:null
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getBlogsThunk.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(getBlogsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getBlogsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default blogSlice.reducer;