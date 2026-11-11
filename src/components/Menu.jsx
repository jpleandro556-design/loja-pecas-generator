import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [['/', 'Início'], ['/produtos', 'Peças'], ['/sobre', 'Sobre'], ['/contato', 'Contato']]

export default function Menu({ close = () => {} }) {
  return <nav className="menu" aria-label="Navegação principal">
    {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={close} className={({ isActive }) => isActive ? 'menu__link menu__link--active' : 'menu__link'}>{label}</NavLink>)}
  </nav>
}

