import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api'

export const loginThunk=createAsyncThunk("/login",async(formData,{rejectWithValue})=>{
    try {
        const response=await api.login(formData);
        console.log(response.data.token);
        return response.data.token;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder 
        .addCase(loginThunk.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(loginThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;