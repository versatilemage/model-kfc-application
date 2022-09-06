import React from 'react'

import { getupdateData } from '../redux/updatemenu';

import {useSelector, useDispatch} from 'react-redux';

function UpdateMenu() {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const name = state['KfcaddData']['name']
  const identifier = state['KfcaddData']['identifier']
  const price = state['KfcaddData']['price']
  const img = state['KfcaddData']['img']
  const loading = state['KfcaddData']['loading']

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(getupdateData())
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter name'/>
      <button>search</button>
    </form>
  )
}

export default UpdateMenu