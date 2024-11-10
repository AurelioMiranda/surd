// components/Navbar.js
"use client"; // Add this to mark the component as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div>
                <div style={{ width: 'fit-content', height: 'fit-content' }} className={styles.extensionLinks}>
                    <Link href="/contacto">Contacto</Link>
                    <Link href="/precos">Preços</Link>
                    <Link href="/faq">FAQ</Link>
                </div>

                {/* Burger Menu for smaller screens */}
                <div style={{ display: 'none' }} className={styles.smallMenu}>
                    <button onClick={toggleMenu}>
                        {/* Conditionally show either menu or close icon */}
                        <span className="material-symbols-outlined" style={{ fontSize: '1.9rem', color: 'black' }}>
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

                <div>
                    <a href="/">
                        <Image
                            src="/surdlogo.png"
                            alt="SURD Logo"
                            width={44}
                            height={50}
                        />
                    </a>
                </div>

                <div style={{ justifyContent: 'flex-end' }}>
                    {
                        //<span class="material-symbols-outlined" style={{ fontSize: '1.9rem', color: 'black' }}>search</span>
                    }
                    <a href='/payment'>
                        <span class="material-symbols-outlined" style={{ fontSize: '1.9rem', color: 'black', marginLeft: '10px' }}>shopping_cart</span>
                    </a>
                </div>
            </div>
            {/* Dropdown Links */}
            {isMenuOpen && (
                <span className={styles.dropdownMenu}>
                    <div>
                        <Link href="/precos">Preços</Link>
                        <Link href="/contacto">Contacto</Link>
                    </div>
                    <div>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/payment">Comprar</Link>
                    </div>
                </span>
            )
            }
        </nav >
    );
};

export default Navbar;
