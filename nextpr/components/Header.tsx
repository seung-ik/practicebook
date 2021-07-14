import Link from 'next/link'
import React from 'react'

const linkStyle ={
  marginRight : 16
}

const Header = () => {
  return (
    <div>
      <Link href="/">
        <button style={linkStyle}>Home</button>
      </Link>
      <Link href="/about">
        <button style={linkStyle}>About</button>
      </Link>
    </div>
  )
}

export default Header
