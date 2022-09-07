import React from 'react'

import { useNavigate } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';

import { deleteData } from '../redux/deleteSlice';

function DeleteMenu() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading} = useSelector((state) => state.delKfc)

  const handleDelete = (e) => {
    dispatch(deleteData(e.target.elements[0].value));
    navigate("/home")
  }
  return (
    <>
    {loading && <div>Please wait Loading.....</div>}
    {<div className="flex flex-row justify-center p-44">
      <form className="flex flex-col bg-red-700 w-1/4 space-y-5 py-12 items-center shadow shadow-black px-5 rounded-xl"
      onSubmit={handleDelete}>
        <h1 className="font-bold text-3xl text-white uppercase w-full text-center py-5 rounded-full">delete menu</h1>
        <input type="text" placeholder="enter food" className="text-xl text-center rounded-lg py-3"/>
        <button className="bg-green-700 text-white font-bold text-xl w-2/5 px-3 py-1 rounded-lg">delete</button>
      </form>
    </div>}
    </>
  )
}

export default DeleteMenu