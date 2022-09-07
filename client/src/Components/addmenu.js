import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Axios from "axios";

import {useSelector, useDispatch} from 'react-redux';

import {addingNewMenu} from '../redux/addNewmenu';

function Addmenu () {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {name, identifier, price, img, loading} = useSelector((state) => state.KfcaddData)
    const state = useSelector((state) => state)
    // const name = state['KfcaddData']['name']
    // const identifier = state['KfcaddData']['identifier']
    // const price = state['KfcaddData']['price']
    // const img = state['KfcaddData']['img']
    const loading = state['KfcaddData']['loading']
    // const [list, setlist] = useState([])
    const [names, setname] = useState("")
    const [identifiers, setidentifier] = useState("")
    const [prices, setprice] = useState(0)
    const [imgs, setimg] = useState("")

    const handleChange = (e) => {
        // e.prevntDefault()
        // dispatch(addingNewMenu(menus))
        console.log(names, identifiers, prices, imgs)
        Axios.post("http://localhost:4001/addmenu",{
        name: names,
        identifier: identifiers,
        price: prices,
        img: imgs
    })
    // dispatch(addingNewMenu(name(names), identifier(identifiers), price(prices), img(imgs)))
        navigate("/home")
    }

    return (
        <>
            <div className='justify-center flex flex-row p-32'>
                {loading && <div>Please wait Loading.....</div>}
                {
                    <div className='flex flex-col bg-red-700 w-96 px-5 space-y-5 py-10 items-center rounded-lg'>
                        <h1 className="font-bold text-3xl text-white uppercase w-full text-center py-5 shadow shadow-black
                        rounded-full">create new menu</h1>
                        <input 
                        type="text"
                        name ='name'
                        onChange={(e) => setname(e.target.value)}
                        placeholder="food name"
                        className='rounded-xl text-center py-3 px-14'>
                        </input>

                        <input 
                        type="text"
                        name ='identifier'
                        onChange={(e) => setidentifier(e.target.value)}
                        placeholder="food identifier"
                        className='rounded-xl text-center py-3 px-14'>
                        </input>

                        <input 
                        type="number"
                        name ='price'
                        onChange={(e) => setprice(e.target.value)}
                        placeholder="food price"
                        className='rounded-xl text-center py-3 px-14'>
                        </input>

                        <input 
                        type="text"
                        name ='img'
                        onChange={(e) => setimg(e.target.value)}
                        placeholder="food image"
                        className='rounded-xl text-center py-3 px-14'>
                        </input>

                        <button type ='submit' onClick={handleChange}
                        className="bg-green-700 rounded-sm text-xl font-bold text-white py-1 w-3/5">add</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Addmenu