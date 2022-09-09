import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';

import {getKfcData} from '../redux/kfcSlice';

import './MenuList.css'

function MenuList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {menu, loading} = useSelector((state) => state.kfc);

  useEffect(() => {
    dispatch(getKfcData());
    
  }, []);

  const deletefood = (identifier) => {axios.delete(`http://localhost:4001/deletemenu/${identifier}`)}

  return (
    <div className="grid grid-cols-3 items-baseline bg-red-800 space-y-5 justify-evenly py-10">
      {loading && <div>Please wait Loading.....</div>}
      {
        !loading && menu.length > 0 && menu.map((item) => (
          <div className="flex flex-col items-center m-10 bg-red-600 rounded-lg p-5 justify-items-start shadow shadow-black space-y-5
          transition duration-700 hover:scale-105" key={item.id}>
            <img src={item.img} alt="no images found" className="w-72 h-64 rounded-lg"/>
              <div className="text-xl font-bold text-white capitalize flex flex-col items-start w-64 text-start">
                <div>{item.name}</div>
                <div>${item.price}</div>
              </div>
              <div className="flex flex-row">
                {/* <button className="text-xl font-bold text-white uppercase bg-blue-700 rounded-lg px-6 py-1 w-10/12">update</button> */}
                <button className="text-xl font-bold text-white uppercase bg-gray-500 rounded-lg px-6 py-1"
                onClick={() => deletefood(item.identifier)}>delete</button>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default MenuList