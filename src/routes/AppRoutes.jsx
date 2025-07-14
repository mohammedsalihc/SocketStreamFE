import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';


function AppRoutes() {
    const token = localStorage.getItem('SStoken')
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes