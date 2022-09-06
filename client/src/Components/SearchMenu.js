import {getIdentifierData} from '../redux/kfcIdentifierSlice';

import {useSelector, useDispatch} from 'react-redux';

import React from 'react';

function SearchMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const menu = state['kfcIdentifier']['menu'];
  const loading = state['kfcIdentifier']['loading'];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getIdentifierData(e.target.elements[0].value));
    e.target.elements[0].value = '';
  }
  return (
    <div className="flex flex-row bg-red-600 justify-between items-center px-20 h-96">
      
        <form onSubmit={handleSubmit} 
        className="flex flex-col space-y-3 items-center">
          <input type="text" placeholder="enter name"
          className="py-3 px-5 text-center rounded-lg"/>
          <button className="bg-green-700 text-white
          font-bold text-xl uppercase py-2 w-3/4 rounded-lg">search</button>
        </form>
        <div className="">
      {loading && <div>Please wait Loading.....</div>}
      {
        !loading && menu.map((item) => (
          <div className="flex flex-col w-full h-80 px-10 space-y-4 shadow shadow-black py-5 rounded-sm bg-red-700" key={item.id}>
            <img src={item.img} className="w-56 h-56 rounded-lg"/>
              <div className="flex flex-col text-center text-white font-bold space-y-2">
                <div>{item.name}</div>
                <div>${item.price}</div>
              </div>
          </div>
        ))
      }
    </div>
        
      
    </div>
  )
}

export default SearchMenu