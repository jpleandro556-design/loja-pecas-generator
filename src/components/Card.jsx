import React from 'react'
import Button from './Button.jsx'
import ProductArt from './ProductArt.jsx'
import { formatPrice } from '../data/products.js'

export default function Card({ product, onAdd }) {
  return <article className="card">
    <div className="card__image"><ProductArt product={product} /><span>{product.category}</span></div>
    <div className="card__content"><small>CÓD. {product.code}</small><h3>{product.name}</h3><p>{product.description}</p>
      <div className="card__bottom"><strong>{formatPrice(product.price)}</strong><Button aria-label={`Adicionar ${product.name}`} onClick={() => onAdd(product)}>+ Adicionar</Button></div>
    </div>
  </article>
}

