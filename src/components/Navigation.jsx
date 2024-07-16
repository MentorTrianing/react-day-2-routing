import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navItems}>
        <li className={styles.items}><Link to={'/'} >Home</Link></li>
        <li className={styles.items}><Link to={"/product"}>Products</Link></li>
        <li className={styles.items}><Link to={"/about"}>About</Link></li>
        <li className={styles.items}><Link to={"/contact"}>Contact</Link></li>
        <li className={styles.items}><Link to={"/signup"}>signUp</Link></li>
      </ul>
    </div>
  )
}
