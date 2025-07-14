import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import ChatRoom from '../pages/ChatRoom';

function AppRoutes() {
    const token = localStorage.getItem('SStoken')
    return (
        <Router>
            <Routes>
                <Route path="/"element={token ? <Navigate to="/home" />:<Login />}/>
                <Route path='/register' element={<Register />}></Route>
                <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} />
                <Route path='/chat/:roomId' element={<ChatRoom />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes