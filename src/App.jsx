import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Calendar from './components/Calendar'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Calendar />
      </div>
    </div>
  )
}

export default App