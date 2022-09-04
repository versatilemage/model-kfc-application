import {createSlice} from '@reduxjs/toolkit';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const addingNewMenu = createAsyncThunk("addnewmenu", async (add) => {
    const response = await fetch(`http://localhost:4001/addmenu`).then((data) => {
        return data.json()
    })
    return response
})

const addReducer = createSlice({
    name: "kfc",
    initialState: {
        loading: false,
        name: "",
        identifier: "",
        price: 0,
        img: ""
    },
    reducer: {},
    extraReducers: {
        [addingNewMenu.pending]: (state, action) => {
            state.loading = true
        },
        [addingNewMenu.fulfilled]: (state, action) => {
            state.loading = false;
            state.name = (action.payload.data);
            state.identifier = (action.payload.data);
            state.price = (action.payload.data);
            state.img = (action.payload.data);
        },
        [addingNewMenu.rejected]: (state, action) => {
            console.log(state,"state")
            console.log(action,"action")
        }
    }
})

const menuReducer = addReducer.reducer

export default menuReducer
