import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="flex justify-between py-3 px-5 bg-cyan-700">
        <Link to={"/"} className="font-bold text-2xl text-white">E-SHOP </Link>
        <Navbar />
    </header>
  )
}

export default Header