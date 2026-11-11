import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu.jsx'

export default function Header({ count, onCart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="header"><div className="container header__inner">
    <Link to="/" className="logo" aria-label="Volt Peças, início"><span className="logo__symbol">V</span><span>volt<small>PEÇAS PARA GERADORES</small></span></Link>
    <Menu close={() => setMenuOpen(false)} />
    <button className="cart-button" onClick={onCart} aria-label={`Abrir seleção, ${count} itens`}><span aria-hidden="true">▱</span> <span className="cart-label">Minha seleção</span><b>{count}</b></button>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">☰</button>
    {menuOpen && <div className="mobile-menu"><Menu close={() => setMenuOpen(false)} /></div>}
  </div></header>
}

