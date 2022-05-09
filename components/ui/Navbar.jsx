import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Navbar.module.css';
export const Navbar = () => {
  return (
    <div className={styles.container}>
        <ul className={styles.ul} >
            <li>
                <Link href={'/'}>
                  <p>About</p>
                </Link>
            </li>

            <li>
                <Link href={'/projects'}>
                  <p>Projects</p>
                </Link>
            </li>


            <li>
                <Link href={'/tecnologies'}>
                  <p>Tecnologies</p>
                </Link>
            </li>


            <li>
                <Link href={'/contact'}>
                  <p>Contact</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}
