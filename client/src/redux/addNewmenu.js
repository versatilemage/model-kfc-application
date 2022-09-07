import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import Axios from "axios";

export const addingNewMenu = createAsyncThunk("addnewmenu", async() => {
    const response = await Axios.post(`http://localhost:4001/addmenu`).then((data) => {
        return data
    })
    return response
})

const initial = {
    loading: true,
    name: "",
    identifier: "",
    price: 0,
    img: "",
}


const addReducer = createSlice({
    name: "kfcaddData",
    initialState: { value: initial },
    reducer: {},
    extraReducers: {
        [addingNewMenu.pending]: (state, action) => {
            state.loading = true
        },
        [addingNewMenu.fulfilled]: (state, action) => {
            state.loading = false;
            state.name = action.payload.data;
            state.identifier = action.payload.data;
            state.price = action.payload.data;
            state.img = action.payload.data;
            // state.menu = action.payload
        },
        [addingNewMenu.rejected]: (state, action) => {
            console.log(state,"state")
            console.log(action,"action")
            state.loading = true
        }
    }
})

const menuReducer = addReducer.reducer

export default menuReducer
