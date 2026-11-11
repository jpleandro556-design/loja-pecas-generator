import React from 'react'

export default function Button({ children, secondary = false, ...props }) {
  return <button className={`button ${secondary ? 'button--secondary' : ''}`} {...props}>{children}</button>
}

