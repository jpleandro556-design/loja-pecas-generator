export const products = [
  { id: 1, name: 'Filtro de óleo', code: 'LF 3349', category: 'Filtros', price: 189.9, color: '#dca956', art: 'filter', description: 'Ajuda a proteger o motor contra impurezas.' },
  { id: 2, name: 'Filtro de combustível', code: 'FS 19732', category: 'Filtros', price: 249.5, color: '#c9856a', art: 'fuel', description: 'Retém água e partículas do diesel.' },
  { id: 3, name: 'Controlador digital', code: 'DSE 7320', category: 'Controle', price: 3290, color: '#86a8a4', art: 'control', description: 'Monitora e controla o grupo gerador.' },
  { id: 4, name: 'Regulador de tensão', code: 'SX 460', category: 'Elétrica', price: 679, color: '#9692b5', art: 'regulator', description: 'Mantém a tensão estável durante a operação.' },
  { id: 5, name: 'Sensor de temperatura', code: 'VDO 120°', category: 'Sensores', price: 138, color: '#d49561', art: 'sensor', description: 'Acompanha a temperatura do motor.' },
  { id: 6, name: 'Alternador Stamford', code: 'UC 224G', category: 'Elétrica', price: 4890, color: '#82977f', art: 'alternator', description: 'Geração confiável para sua operação.' },
]

export const formatPrice = (price) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

