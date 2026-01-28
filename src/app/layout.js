// app/layout.js
import Navbar from './/components/Navbar'
import BuyNow from './/components/BuyNow'
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
        <header>
          <Navbar />
        </header>
        <main role="main">
          {children}
        </main>
        <BuyNow />
        <footer className="footer" role="contentinfo">
          <div className="footer-container">

            {/* TOP: Main Footer Content */}
            <div className="footer-main">
              <div className="footer-col">
                <h3 className="footer-heading">SURD</h3>
                <p className="footer-tagline">Stick yoUR Design.</p>
                <div className="socials">
                  <a href="https://www.instagram.com/surd.pt/" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Instagram" />
                  </a>
                  <a href="https://www.tiktok.com/@surd.pt" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.freepik.com/fotos-premium/logotipo-do-tiktok_1080029-103.jpg?w=740" alt="Tiktok" />
                  </a>
                </div>
              </div>

              <div className="footer-col">
                <h4 className="footer-subheading">Explorar</h4>
                <Link href="/">Início</Link>
                <Link href="/materials">Materiais</Link>
                <Link href="/precos">Preçário</Link>
                <Link href="/faq">FAQ</Link>
              </div>

              <div className="footer-col">
                <h4 className="footer-subheading">Comunidade</h4>
                <Link href="/contacto">Contacto</Link>
                <Link href="/embaixadores">Vem ser embaixador!</Link>
                <p className="footer-cta-text">buy our stickers :)</p>
              </div>
            </div>

            <hr className="footer-divider" />

            {/* BOTTOM: Payments & Credits */}
            <div className="footer-bottom">
              <div className="payment-methods">
                <img src="Revolut-Logo.png" alt="Revolut" className="payment-icon revolut" />
                <img src="PayPal-Logo.png" alt="PayPal" className="payment-icon paypal" />
                <img src="mb.png" alt="Multibanco" className="payment-icon" />
                <img src="mbway.png" alt="MBWay" className="payment-icon" />
              </div>
              <div className="footer-credits">
                <span>© {new Date().getFullYear()} SURD. Todos os direitos reservados.</span>
              </div>
            </div>

          </div>
        </footer>
      </body>
    </html>
  )
}
