import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Project from '../screens/Project'
import UserAuth from '../auth/UserAuth'
import Landing from '../screens/Landing'
import Launch from '../screens/Launch'

const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Landing/>} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/home" element={<UserAuth><Home /></UserAuth>} />
                <Route path="/launch" element={<UserAuth><Launch/></UserAuth>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/project" element={<Project />} /> */}
                <Route path="/project" element={<UserAuth><Project /></UserAuth>} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes