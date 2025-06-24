import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo">Calender</h1>
      <nav className="nav">
        <NavItem text="Home" to="/" />
        <NavItem text="Events" to="/programs" />
       
      </nav>
      <div className="user-info">
        <p>DEEPAK S</p>
        <p>deepak.it22@bitsathy.ac.in</p>
      </div>
    </div>
  )
}

const NavItem = ({ text, to = '#', active, badge }) => (
  <Link to={to} className={`nav-item ${active ? 'active' : ''}`}>
    <span>{text}</span>
    {badge && <span className="badge">2</span>}
  </Link>
)

export default Sidebar