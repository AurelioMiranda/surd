// components/Navbar.js
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div style={{ width: 'fit-content', height: 'fit-content' }} className={styles.extensionLinks}>
                <Link href="/">Início</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/sobre">Quem Somos</Link>
                <Link href="/contacto">Contacto</Link>
            </div>
            <div style={{ display: 'none' }} className={styles.smallMenu}>
                for mobile
            </div>
            <div>
                <Image
                    src="/surdlogo.png"
                    alt="SURD Logo"
                    width={44}
                    height={50}
                />
            </div>
            <div style={{ justifyContent: 'flex-end' }}>
                <span class="material-symbols-outlined" style={{fontSize: '1.9rem', color: 'black'}}>search</span>
                <span class="material-symbols-outlined" style={{fontSize: '1.9rem', color: 'black', marginLeft: '10px'}}>shopping_cart</span>
            </div>
        </nav>
    )
}

export default Navbar
