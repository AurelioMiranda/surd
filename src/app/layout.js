// app/layout.js
import Navbar from './/components/Navbar'
import Link from 'next/link'
import "./globals.css";

export const metadata = {
  title: "SURD",
  description: "Stick yoUR Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />
        <Navbar />
        {children}
        <footer>
          <div className='footer-top'>
            <div className='footer-top-container'>
              <div>
                <div style={{ width: 'fit-content', height: 'fit-content' }}>
                  <Link href="/" className='extensionLinks'>Início</Link>
                  <Link href="/faq" className='extensionLinks'>FAQ</Link>
                  <Link href="/precos" className='extensionLinks'>Preços</Link>
                  <Link href="/contacto" className='extensionLinks'>Contacto</Link>
                </div>
              </div>
              <div style={{ marginTop: '1.2rem' }}><Link href="/embaixadores" className='extensionLinks'>Vem ser nosso embaixador!</Link></div>
              <div style={{ marginTop: '1.7rem' }}>
                <div className='socials'>
                  <a href="https://www.instagram.com/surd.pt/" target="_blank" rel="noopener noreferrer">
                    <img maw={240} width="25" height="25"
                      src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png"
                      alt="Instagram" />
                  </a>
                  <a href="https://www.tiktok.com/@surd.pt" target="_blank" rel="noopener noreferrer">
                    <img maw={240} width="25" height="25" style={{ borderRadius: '5px' }}
                      src="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338429_1280.png"
                      alt="Tiktok" />
                  </a>
                  <a href="https://www.linkedin.com/in/mirandex/" target="_blank" rel="noopener noreferrer" style={{ display: 'none' }}>
                    <img maw={240} width="25" height="25"
                      src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                      alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <div className='footer-bottom-container'>
              <div className='footer-img-container'>
                <img maw={240} width="25" height="25"
                  src="Revolut-Logo.png"
                  alt="Revolut" style={{ height: '60px' }} />
                <img maw={240} width="25" height="25"
                  src="PayPal-Logo.png"
                  alt="PayPal" style={{ height: '60px' }} />
                <img maw={240} width="25" height="25"
                  src="mb.png"
                  alt="Multibanco" />
                <img maw={240} width="25" height="25"
                  src="mbway.png"
                  alt="MBWay" />
              </div>
              <div className='footer-img-container-mobile' style={{ display: 'none' }}>
                <div>
                  <img maw={240} width="25" height="25"
                    src="Revolut-Logo.png"
                    alt="Revolut" style={{ height: '60px' }} />
                  <img maw={240} width="25" height="25"
                    src="PayPal-Logo.png"
                    alt="PayPal" style={{ height: '60px' }} />
                </div>
                <div>
                  <img maw={240} width="25" height="25"
                    src="mb.png"
                    alt="Multibanco" />
                  <img maw={240} width="25" height="25"
                    src="mbway.png"
                    alt="MBWay" />
                </div>
              </div>
              <div className='footer-banner-credits'>
                <div style={{color: 'white'}}>
                  buy our stickers :)
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  © 2024, SURD
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
