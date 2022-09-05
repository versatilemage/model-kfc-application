import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

import {useSelector, useDispatch} from 'react-redux';

import {addingNewMenu} from '../redux/addNewmenu';

function Addmenu () {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading} = useSelector((state) => state.KfcaddData)
    // const state = useSelector((state) => state)
    // const name = state['KfcaddData']['name']
    // const identifier = state['KfcaddData']['identifier']
    // const price = state['KfcaddData']['price']
    // const img = state['KfcaddData']['img']
    // const loading = state['KfcaddData']['loading']
    // const [list, setlist] = useState([])
    const [name, setname] = useState("")
    const [identifier, setidentifier] = useState("")
    const [price, setprice] = useState(0)
    const [img, setimg] = useState("")

// const addtoList = () => {
//     Axios.post("http://localhost:4001/addmenu",{
//         name, identifier, price, img
//     }).then((res) => {

//     })
// }


    const handleChange = (e) => {
        // e.prevntDefault()
        // dispatch(addingNewMenu(menus))
        console.log(name, identifier, price, img)
        Axios.post("http://localhost:4001/addmenu",{
        name: name,
        identifier: identifier,
        price: price,
        img: img
    })
        navigate("/home")
    }

    // const onchange = (e) => {
    //     setmenu((pre) => ({
    //         ...pre,
    //         [e.target.name]: e.target.value,
    //     }))
    // }

    return (
        <>
            <div>
                {loading && <div>Please wait Loading.....</div>}
                {
                    <div>
                        <input 
                        type="text"
                        name ='name'
                        onChange={(e) => setname(e.target.value)}
                        placeholder="food name">
                        </input>

                        <input 
                        type="text"
                        name ='identifier'
                        onChange={(e) => setidentifier(e.target.value)}
                        placeholder="food identifier">
                        </input>

                        <input 
                        type="number"
                        name ='price'
                        onChange={(e) => setprice(e.target.value)}
                        placeholder="food price">
                        </input>

                        <input 
                        type="text"
                        name ='img'
                        onChange={(e) => setimg(e.target.value)}
                        placeholder="food image">
                        </input>

                        <button type ='submit' onClick={handleChange}>add</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Addmenu