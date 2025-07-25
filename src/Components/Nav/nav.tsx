'use client';

import styles from './Nav.module.css';
import Link from "next/link";
import HamBurgerIcon from '../Icons/HamburgerIcon/HamBurgerIcon';

const Nav = () => {
  return (
    <nav className={styles['nav-container']}>
      <ul>
        <li>
          <HamBurgerIcon />
          <ul>
            <li>
                <Link href="/" className={styles['nav-link']}>HOME</Link>
            </li>
            <li>
                <Link href="/football" className={styles['nav-link']}>FOOTBALL VIA POSTGRES</Link>
            </li>
            <li>
                <Link href="/league" className={styles['nav-link']}>LEAGUE STATS</Link>
            </li>
            <li>
                <Link href="/web-stats" className={styles['nav-link']}>PERMY WEB STATS</Link>
            </li>
            <li>
                <Link href="/products" className={styles['nav-link']}>PRODUCTS</Link>
            </li>
            <li>
                <Link href="/docs" className={styles['nav-link']}>DOCS CATCH ALL EXAMPLE</Link>
            </li>
            <li>
                <Link href="/users" className={styles['nav-link']}>USERS LIST - FROM API USING ROUTE API</Link>
            </li>
            <li>
                <Link href="/users/adduser" className={styles['nav-link']}>ADD USER - EXAMPLE FORM POST - USING ROUTE API</Link>
            </li>
            <li>
                <Link href="/posts" className={styles['nav-link']}>BLOGS POSTS</Link>
            </li>
            <li>
                <Link href="/privatefolders" className={styles['nav-link']}>PRIVATE FOLDERS</Link>
            </li>
            <li>
                <Link href="/login" className={styles['nav-link']}>ROUTE GROUPS EXAMPLE</Link>
            </li>
            <li>
                <Link href="/photos" className={styles['nav-link']}>PHOTOS</Link>
            </li>
            <li>
                <Link href="/contextuser" className={styles['nav-link']}>CONTEXT EXAMPLE</Link>
            </li>
        </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;