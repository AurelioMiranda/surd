// components/Navbar.js
"use client"; // Add this to mark the component as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.nav} role="navigation">
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
            <Drawer anchor="left" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                <Box sx={{ width: 250, paddingTop: 2 }} role="presentation" onClick={() => setIsMenuOpen(false)}>
                    {/* Header Section */}
                    <Box sx={{ padding: '16px', textAlign: 'center', marginBottom: 2 }}>
                        <h3>Menu</h3>
                    </Box>

                    <List>
                        <ListItem>
                            <ListItemButton component={Link} href="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Início" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton component={Link} href="/precos">
                                <ListItemIcon>
                                    <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Preços" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton component={Link} href="/contacto">
                                <ListItemIcon>
                                    <ContactMailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Contacto" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton component={Link} href="/faq">
                                <ListItemIcon>
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText primary="FAQ" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton component={Link} href="/payment">
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Comprar" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Divider sx={{ marginY: 2 }} />

                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
