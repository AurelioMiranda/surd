import styles from './Embaixadores.module.css'

export default function Embaixadores() {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <div className={styles.badge}>🚀</div>
        
        <h1 className={styles.title}>Embaixadores SURD</h1>
        
        <p className={styles.description}>
          Estamos a preparar algo exclusivo para quem vive a nossa marca. 
          Em breve, poderás candidatar-te para representar a SURD e ter acesso a vantagens únicas!
        </p>
        
        <p className={styles.footer}>Em breve!</p>

        <a 
          href="https://www.instagram.com/surd.pt" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.instaLink}
        >
          Segue-nos no Instagram para seres o primeiro a saber
        </a>
      </section>
    </div>
  );
}