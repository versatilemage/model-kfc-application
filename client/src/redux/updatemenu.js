import {createSlice} from '@reduxjs/toolkit';
import Axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getupdateData = createAsyncThunk('getIdentifier', async(search) => {
    const response = await Axios.put(`http://localhost:4001/updatemenu/${search}`).then((data) => {
        return data.json();
    })
    return response;
})

const initial = {
    loading: true,
    name: null,
    identifier: null,
    price: null,
    img: null,
}

const updatereducer = createSlice({
    name: "kfcupdate",
    initialState: {
        Value: initial
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

const updatedReducer = updatereducer.reducer

export default updatedReducer
