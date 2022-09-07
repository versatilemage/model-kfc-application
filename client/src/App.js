
import {Routes, Route, Link} from 'react-router-dom';

import MenuList from './Components/MenuList'

import DeleteMenu from './Components/DeleteMenu'

import UpdateMenu from './Components/UpdateMenu'

import SearchMenu from './Components/SearchMenu'

import Addmenu from './Components/addmenu';

import './App.css'

function App() {
  return (
    <div>
      <div className="bg-black text-white text-2xl font-bold uppercase flex flex-row justify-end space-x-10 py-6 px-4">
        <Link to="home" className="transition duration-700 hover:text-red-800">Home</Link>
        <Link to="search" className="transition duration-700 hover:text-red-800">Search</Link>
        <Link to="update" className="transition duration-700 hover:text-red-800">Update</Link>
        <Link to="delete" className="transition duration-700 hover:text-red-800">Delete</Link>
        <Link to="add" className="transition duration-700 hover:text-red-800">add</Link>
      </div>
      
      <Routes>
        <Route exact path="/" element={<MenuList />}></Route>
        <Route path="/home" element={<MenuList />}></Route>
        <Route path="/search" element={<SearchMenu/>}></Route>
        <Route path="/update" element={<UpdateMenu/>}></Route>
        <Route path="/delete" element={<DeleteMenu/>}></Route>
        <Route path="/add" element={<Addmenu />}></Route>
      </Routes>
    </div>
  )
}

export default App
