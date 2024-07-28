import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="flex justify-between place items-center py-3.5 px-5 bg-teal-700">
        <Link to={"/"} className="font-bold text-2xl text-white">Paradise Nursery </Link>
        <Navbar />
    </header>
  )
}

export default Header