import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Header from './components/Header.tsx'
import Navigation from './components/Navigation.tsx'
import './App.pcss'

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    )
}

export default App
