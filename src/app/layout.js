// app/layout.js
import Navbar from './/components/Navbar'
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
              <div><b>navegação here</b></div>
              <div><b>programa de embaixadores né</b></div>
              <div style={{ marginTop: '1.2rem' }}><b>insta, tiktok e cenas</b></div>
            </div>
          </div>
          <div className='footer-bottom'>
            <div className='footer-bottom-container'>
              <div>
                <b>TODO: payment methods here</b>
              </div>
              <div style={{ fontSize: '0.5rem' }}>
                © 2024, SURD
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
