import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'

export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}
