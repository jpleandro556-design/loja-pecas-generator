import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="footer"><div className="container footer__inner">
    <Link to="/" className="logo logo--light"><span className="logo__symbol">V</span><span>volt<small>PEÇAS PARA GERADORES</small></span></Link>
    <p>Peças certas para manter sua energia funcionando.</p>
    <span>© {new Date().getFullYear()} Volt Peças</span>
  </div></footer>
}

