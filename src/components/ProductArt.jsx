import React from 'react'

const art = {
  filter: <><path d="M66 74h68l-5 95H71z"/><path d="M69 88h62M68 101h64M67 114h65M67 127h64M66 140h64M85 61h30v13H85zM85 169h30v12H85z"/></>,
  fuel: <><path d="M70 69h63v105H70z"/><path d="M77 86h49M77 100h49M77 114h49M77 128h49M77 142h49"/><path d="M88 57h28v12H88zM99 174v14m8-14v14"/><path d="M147 91c-12 13-12 22 0 25 12-3 12-12 0-25z"/></>,
  control: <><rect x="55" y="52" width="100" height="116" rx="8"/><rect x="68" y="66" width="74" height="44" rx="4"/><path d="m78 96 15-17 13 11 22-18"/><circle cx="76" cy="133" r="5"/><circle cx="96" cy="133" r="5"/><circle cx="116" cy="133" r="5"/><path d="M69 150h73"/></>,
  regulator: <><rect x="60" y="67" width="91" height="76" rx="9"/><path d="M72 83h67v30H72zM82 98h13m12-8v13m12-13v13m-40 33v17m54-17v17M90 160h35"/><circle cx="79" cy="76" r="2"/><circle cx="132" cy="76" r="2"/></>,
  sensor: <><path d="M104 50a25 25 0 0 1 25 25c0 16-25 57-25 57S79 91 79 75a25 25 0 0 1 25-25z"/><circle cx="104" cy="76" r="9"/><path d="M104 132v35h30m-4-10v19m-7-9h14"/></>,
  alternator: <><circle cx="105" cy="108" r="51"/><circle cx="105" cy="108" r="32"/><circle cx="105" cy="108" r="10"/><path d="M105 58v18m0 64v19M55 108h18m64 0h19M70 73l13 13m45 45 13 13m0-71-13 13m-45 45-13 13M79 164h53l9 10H70z"/></>,
}

export default function ProductArt({ product }) {
  return <div className="product-art" style={{ '--accent': product.color }} role="img" aria-label={`Ilustração de ${product.name}`}>
    <span className="product-art__circle" />
    <svg viewBox="0 0 210 210" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{art[product.art]}</svg>
  </div>
}

