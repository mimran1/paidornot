import { useContext, useState } from 'react'
import './App.css'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import DataContext, { DataProvider } from './context/DataContext'
import Home from './pages/Home'
import { SideBarProvider } from './context/SideBarContext'
import { Route, Routes } from 'react-router-dom';
import Missing from './pages/Missing'
import Layout from './components/Layout'
import YearOverYear from './pages/YearOverYear'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/yearoveryear' element={<YearOverYear />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Missing />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
