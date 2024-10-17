// components/Navbar.js
"use client"; // Add this to mark the component as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const pages = {
        home: ['stickers', 'decals', 'vinyl', 'custom', 'personalized', 'waterproof', 'weatherproof', 'durable', 'high-quality', 'unique', 'original', 'trendy', 'cool', 'cute', 'funny', 'motivational', 'inspirational', 'laptop', 'phone', 'car', 'water bottle', 'planner', 'journal', 'notebook', 'luggage', 'skateboard', 'bicycle', 'helmet', 'surfboard', 'wall', 'window', 'anime', 'gaming', 'sports', 'movie', 'TV', 'music', 'band', 'artist', 'travel', 'city', 'country', 'nature', 'animal', 'pet', 'floral', 'abstract', 'geometric', 'minimalist', 'vintage', 'retro', 'boho', 'kawaii', 'gothic', 'grunge', 'psychedelic', 'inspirational quotes', 'motivational sayings', 'funny quotes', 'pun', 'sarcastic', 'meme', 'pop culture', 'holiday', 'seasonal', 'birthday', 'anniversary', 'wedding', 'baby', 'kids', 'teen', 'adult',],
        faq: ['faq', 'questions', 'shipping', 'payment', 'order'],
        precos: ['prices', 'cost', 'preços', 'stickers'],
        contacto: ['contact', 'instagram', 'help', 'social'],
        embaixadores: []
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const searchKeyword = (query) => {
        const results = [];
        for (const [page, keywords] of Object.entries(pages)) {
            if (keywords.some(word => word.toLowerCase().includes(query.toLowerCase()))) {
                results.push(page);
            }
        }
        return results;
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            const results = searchKeyword(query);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const mapResultToLink = (result) => {
        return result === 'home' ? '/' : `/${result}`;
    };

    return (
        <nav className={styles.nav}>
            <div>
                <div style={{ width: 'fit-content', height: 'fit-content' }} className={styles.extensionLinks}>
                    <Link href="/">Início</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/precos">Preços</Link>
                    <Link href="/contacto">Contacto</Link>
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
                    <Image
                        src="/surdlogo.png"
                        alt="SURD Logo"
                        width={44}
                        height={50}
                    />
                </div>

                {/* Search Input */}
                <div style={{ position: 'relative', justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}
                    className={styles.searchContainer}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className={styles.searchInput}
                    />

                    {/* Display search results */}
                    {searchResults.length > 0 && (
                        <div className={styles.searchResults} style={{ width: 'unset' }}>
                            {searchResults.map((result, index) => (
                                <div key={index} style={{ width: 'unset' }}>
                                    <Link href={mapResultToLink(result)}>{result.charAt(0).toUpperCase() + result.slice(1)}</Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Dropdown Links */}
            {isMenuOpen && (
                <span className={styles.dropdownMenu}>
                    <div>
                        <Link href="/">Início</Link>
                        <Link href="/faq">FAQ</Link>
                    </div>
                    <div>
                        <Link href="/precos">Preços</Link>
                        <Link href="/contacto">Contacto</Link>
                    </div>
                </span>
            )}
        </nav>
    );
};

export default Navbar;
