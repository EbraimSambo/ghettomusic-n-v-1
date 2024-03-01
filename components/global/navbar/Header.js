import Link from 'next/link'
import React from 'react'
import { Links } from './Links'

import header from "./header.module.css"

const Header = () => {
  return (
    <header className={header.header}>
        <nav>
            <ul>
                {Links.map((link, index)=>(<li key={link.id}><Link href={link.path}> {link.titlePath} </Link></li>))}
            </ul>
        </nav>
    </header>
  )
}

export default Header
