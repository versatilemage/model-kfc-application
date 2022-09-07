import React, { useState } from 'react'

import Axios from "axios";

import { getupdateData } from '../redux/updatemenu';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

function UpdateMenu() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const {loading} = useSelector((state) => state.KfcUpdate)
  // const state = useSelector((state) => state)
  // const name = state['KfcUpdate']['name']
  const [initial, setinitial] = useState("")
  const [foodname, setfoodname] = useState("")
  const [foodprice, setfoodprice] = useState(0)
  const [imageurl, setimageurl] = useState("")

  const handleSubmit = (e) => {
    // setinitial(e.target.elements[0].value)
  }

  const handleAllupdate = (e) => {
    Axios.put(`http://localhost:4001/updatemenu/${initial}`,{
      name: foodname,
      img: imageurl,
      price: foodprice
    })
    navigate("/home")
  }
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full p-32">
        {/* <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-red-800 h-80 py-28 space-y-4 shadow hover:shadow-black items-center">
          <input type="text" placeholder="enter identifier" className="text-center py-3 px-2"/>
          <button className="capitalize text-xl font-bold bg-green-800 text-white
            rounded-lg px-3 py-2 w-3/5" type="submit">
            search
          </button>
        </form> */}
        {/* {loading && <div>Please wait Loading.....</div>} */}
        <form className="flex flex-col w-full h-80 px-10 space-y-4 shadow hover:shadow-black py-10 rounded-sm bg-red-700 w-2/5 items-center"
        onSubmit={handleAllupdate}>
        <input type="text" placeholder="enter identifier" className="text-center py-3 px-2 w-72"
          onChange={(e) => {setinitial(e.target.value)}}/>
          <input type="text" placeholder="enter name" className="text-center py-3 px-2 w-72"
          onChange={(e) => {setfoodname(e.target.value)}}/>
          <input type="number" placeholder="enter price" className="text-center py-3 px-2 w-72"
          onChange={(e) => {setfoodprice(e.target.value)}}/>
          <input type="text" placeholder="enter image url" className="text-center py-3 px-2 w-72"
          onChange={(e) => {setimageurl(e.target.value)}}/>
          <button className="capitalize text-xl font-bold bg-green-800 text-white
            rounded-lg px-3 py-2 w-2/5">
            save changes
          </button>
        </form>
      </div>
    </>
  )
}

export default UpdateMenu