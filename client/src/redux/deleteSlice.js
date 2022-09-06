import {createSlice} from '@reduxjs/toolkit';

import Axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteData = createAsyncThunk("deleteSelecteddata", async(search) => {
    const res = await Axios.delete(`http://localhost:4001/deletemenu/${search}`)
    return res
})

const deleteidentifier = createSlice({
    name:"delKfc",
    initialState: {
        menu: [],
        loading: true
    },
    extraReducers:{
        [deleteData.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteData.fulfilled]: (state, action) => {
            state.loading = false
            state.menu = (action.payload)
        },
        [deleteData.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const erasingreducer = deleteidentifier.reducer

export default erasingreducer
