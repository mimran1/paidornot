import { useContext, useState } from 'react'
import './App.css'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import DataContext, { DataProvider } from './context/DataContext'
import Home from './pages/Home'
import MainContent from './components/MainContent'
import { SideBarProvider } from './context/SideBarContext'


function App() {

  return (
    <DataProvider>
      <SideBarProvider>
        <TopNav />
        <SideNav />
        <MainContent />
      </SideBarProvider>
    </DataProvider>

  )
}

export default App
