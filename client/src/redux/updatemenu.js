import {createSlice} from '@reduxjs/toolkit';

import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getupdateData = createAsyncThunk('getIdentifier', async(id) => {
    const response = await axios.put(`http://localhost:4001/updatemenu/${id}`)
    return response;
})

const updatereducer = createSlice({
    name: "kfcUpdate",
    initialState: {
        loading: false,
        name: "",
        identifier: "",
        price: 0,
        img: "",
    },
    reducer: {},
    extraReducers: {
        [getupdateData.pending]: (state, action) => {
            state.loading = true
        },
        [getupdateData.fulfilled]: (state, action) => {
            state.loading = false;
            state.name = action.payload.data;
            state.identifier = action.payload.data;
            state.price = action.payload.data;
            state.img = action.payload.data;
        },
        [getupdateData.rejected]: (state, action) => {
            console.log(state,"state")
            console.log(action,"action")
            state.loading = true
        }
    }
})

const UpdatedReducer = updatereducer.reducer

export default UpdatedReducer
