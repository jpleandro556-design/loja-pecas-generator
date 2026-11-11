import React, { useMemo, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import { formatPrice, products } from './data/products.js'

const categories = ['Todas', ...new Set(products.map((product) => product.category))]

function ProductList({ items, onAdd }) {
  return <div className="product-grid">{items.map((product) => <Card key={product.id} product={product} onAdd={onAdd} />)}</div>
}

function Home({ onAdd }) {
  return <>
    <section className="hero"><div className="container hero__inner">
      <div className="hero__copy"><span className="eyebrow"><i /> PEÇAS PARA GRUPOS GERADORES</span><h1>Energia que<br />não pode <em>parar.</em></h1><p>Encontre peças confiáveis para manter seu gerador pronto para o trabalho.</p><Link className="button" to="/produtos">Ver peças <span>→</span></Link><div className="hero__note"><span>✓</span> Atendimento próximo e especializado</div></div>
      <div className="hero__visual" role="img" aria-label="Ilustração de um grupo gerador industrial"><div className="hero__sun"/><div className="generator"><div className="generator__top"><i/><i/><i/><b>VOLT POWER</b></div><div className="generator__body"><div className="generator__panel"><span/><span/><strong>V</strong><small>ENERGY SYSTEM</small></div><div className="generator__vents">{Array.from({ length: 8 }, (_, i) => <i key={i}/>)}</div><div className="generator__grille">{Array.from({ length: 5 }, (_, i) => <i key={i}/>)}</div></div><div className="generator__base"><i/><i/><i/></div></div><div className="hero__caption">PRONTO PARA MANTER SUA OPERAÇÃO ATIVA</div><span className="hero__number">01</span></div>
    </div></section>
    <section className="benefits"><div className="container benefits__inner"><div><b>01</b><span><strong>Peças selecionadas</strong><small>Para cuidar do seu equipamento</small></span></div><div><b>02</b><span><strong>Ajuda especializada</strong><small>A gente ajuda a achar a peça</small></span></div><div><b>03</b><span><strong>Compra simples</strong><small>Monte sua lista de orçamento</small></span></div></div></section>
    <section className="section container"><div className="section-heading"><div><span className="eyebrow">ESCOLHA POR CATEGORIA</span><h2>Peças em destaque</h2></div><Link to="/produtos" className="text-link">Ver todas as peças →</Link></div><ProductList items={products.slice(0, 3)} onAdd={onAdd} /></section>
    <section className="contact-band"><div className="container contact-band__inner"><div><span className="eyebrow">NÃO SABE QUAL PEÇA PRECISA?</span><h2>A gente ajuda você a encontrar.</h2></div><Link className="button button--light" to="/contato">Fale com a equipe →</Link></div></section>
  </>
}

function ProductsPage({ onAdd }) {
  const [category, setCategory] = useState('Todas')
  const [query, setQuery] = useState('')
  const items = useMemo(() => products.filter((p) => (category === 'Todas' || p.category === category) && `${p.name} ${p.code} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  return <main className="page container"><div className="page-title"><span className="eyebrow">CATÁLOGO</span><h1>Peças para o seu gerador</h1><p>Escolha os itens e monte sua lista para solicitar um orçamento.</p></div>
    <div className="catalog-tools"><div className="filters" aria-label="Filtrar por categoria">{categories.map((item) => <button key={item} className={category === item ? 'filter filter--active' : 'filter'} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search"><span aria-hidden="true">⌕</span><input aria-label="Buscar peça" placeholder="Buscar por nome ou código" value={query} onChange={(e) => setQuery(e.target.value)} /></label></div>
    {items.length ? <ProductList items={items} onAdd={onAdd} /> : <div className="empty"><h2>Nenhuma peça encontrada</h2><p>Tente outro nome ou categoria.</p><Button secondary onClick={() => { setQuery(''); setCategory('Todas') }}>Limpar busca</Button></div>}
  </main>
}

function AboutPage() {
  return <main className="page container"><div className="page-title"><span className="eyebrow">SOBRE A VOLT</span><h1>Peças certas.<br /><em>Energia constante.</em></h1><p>A Volt Peças nasceu para facilitar a busca por componentes de grupos geradores. Aqui você encontra um catálogo simples e pode montar uma lista de peças para pedir seu orçamento.</p></div><div className="about-grid"><article><b>01</b><h2>Praticidade</h2><p>Pesquise pelo nome ou código e encontre as peças do catálogo.</p></article><article><b>02</b><h2>Clareza</h2><p>Veja categoria, descrição e preço de cada componente.</p></article><article><b>03</b><h2>Atendimento</h2><p>Se precisar de ajuda, envie sua dúvida pelo formulário de contato.</p></article></div><Link className="button" to="/produtos">Conhecer as peças →</Link></main>
}

function ContactPage() {
  const [sent, setSent] = useState(false)
  function submit(event) { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <main className="page container"><div className="page-title"><span className="eyebrow">CONTATO</span><h1>Como podemos ajudar?</h1><p>Envie sua mensagem. Este formulário é demonstrativo e não envia dados para um servidor.</p></div><form className="contact-form" onSubmit={submit}><label>Seu nome<input name="name" required placeholder="Nome" /></label><label>Seu e-mail<input name="email" type="email" required placeholder="voce@email.com" /></label><label>Mensagem<textarea name="message" rows="5" required placeholder="Conte qual peça ou informação está procurando" /></label><Button type="submit">Enviar mensagem →</Button>{sent && <p className="success" role="status">Mensagem registrada. Obrigado pelo contato!</p>}</form></main>
}

function NotFound() { return <main className="page container not-found"><span className="eyebrow">404</span><h1>Esta página não foi encontrada.</h1><Link to="/" className="button">Voltar ao início →</Link></main> }

function CartPanel({ cart, onChange, onClose }) {
  const chosen = products.filter((p) => cart[p.id])
  const total = chosen.reduce((sum, p) => sum + p.price * cart[p.id], 0)
  return <div className="drawer-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}><aside className="drawer" aria-label="Sua seleção de peças"><div className="drawer__head"><div><span className="eyebrow">ORÇAMENTO</span><h2>Sua seleção</h2></div><button onClick={onClose} aria-label="Fechar seleção">×</button></div>
    {chosen.length ? <><div className="drawer__items">{chosen.map((product) => <div className="drawer-item" key={product.id}><div><strong>{product.name}</strong><small>{product.code} · {formatPrice(product.price)}</small><div className="quantity"><button onClick={() => onChange(product.id, cart[product.id] - 1)} aria-label={`Remover uma unidade de ${product.name}`}>−</button><span>{cart[product.id]}</span><button onClick={() => onChange(product.id, cart[product.id] + 1)} aria-label={`Adicionar uma unidade de ${product.name}`}>+</button><button className="remove" onClick={() => onChange(product.id, 0)}>Remover</button></div></div><b>{formatPrice(product.price * cart[product.id])}</b></div>)}</div><div className="drawer__total"><span>Total estimado</span><strong>{formatPrice(total)}</strong></div><p className="drawer__note">Preços demonstrativos. Entre em contato para confirmar disponibilidade e orçamento.</p><Link className="button drawer__contact" to="/contato" onClick={onClose}>Pedir orçamento →</Link></> : <div className="drawer__empty"><span>▱</span><h3>Sua lista está vazia</h3><p>Adicione peças do catálogo para montar seu pedido de orçamento.</p><Link to="/produtos" className="button" onClick={onClose}>Ver peças →</Link></div>}
  </aside></div>
}

export default function App() {
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)
  const count = Object.values(cart).reduce((sum, amount) => sum + amount, 0)
  function addToCart(product) { setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + 1 })) }
  function changeCart(id, quantity) { setCart((current) => { const next = { ...current }; if (quantity <= 0) delete next[id]; else next[id] = quantity; return next }) }
  return <><Header count={count} onCart={() => setCartOpen(true)} /><Routes>
    <Route path="/" element={<Home onAdd={addToCart} />} />
    <Route path="/produtos" element={<ProductsPage onAdd={addToCart} />} />
    <Route path="/sobre" element={<AboutPage />} /><Route path="/contato" element={<ContactPage />} /><Route path="*" element={<NotFound />} />
  </Routes><Footer />{cartOpen && <CartPanel cart={cart} onChange={changeCart} onClose={() => setCartOpen(false)} />}</>
}

