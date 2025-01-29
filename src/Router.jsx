import React from 'react'
import App from './App'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<App/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router