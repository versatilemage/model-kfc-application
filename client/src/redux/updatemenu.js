import {createSlice} from '@reduxjs/toolkit';

import Axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getupdateData = createAsyncThunk('getid/getIdentifier', async(id) => {
    const response = await Axios.put(`http://localhost:4001/updatemenu/${id}`)
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
            state.name = action.payload.name;
            state.identifier = action.payload.identifier;
            state.price = action.payload.price;
            state.img = action.payload.img;
        },
        [getupdateData.rejected]: (state, action) => {
            console.log(state,"state")
            console.log(action,"action")
            state.loading = true
        }
    }
})

const UpdatedReducer = updatereducer.reducer

export const {loading, name, identifier, price, img} = (state) => (state.kfcUpdate)

export default UpdatedReducer
