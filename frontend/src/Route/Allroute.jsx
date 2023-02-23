import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatPage from '../Pages/ChatPage'
import HomePage from '../Pages/HomePage'

const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/chats' element={<ChatPage/>}/>
        </Routes>
    </div>
  )
}

export default Allroute