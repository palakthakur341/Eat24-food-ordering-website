// import React from 'react'

import Navbar from "./component/Navbar/Navbar"
import Sidebar from "./component/Sidebar/Sidebar"
import './index.css'
import './App.css'
import { Routes ,Route} from "react-router-dom"
import Add from "./pages/Add/Add.jsx"
import List from "./pages/List/List.jsx"
import Order from "./pages/Order/Order.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url="http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>
        </Routes>

      </div>
    </div>
  )
}

export default App
