import styles from './Contacto.module.css'

export default function Contacto() {
  return (
    <div className={styles.container}>
      <section className={styles.contactCard}>
        <h1 className={styles.title}>Vamos Conversar?</h1>
        <p className={styles.subtitle}>
          Tens alguma dúvida ou queres um orçamento personalizado? 
          Estamos à distância de uma mensagem!
        </p>

        <div className={styles.options}>
          {/* Instagram Option */}
          <div className={styles.optionItem}>
            <div className={styles.iconCircle}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className={styles.icon} />
            </div>
            <h3>Instagram</h3>
            <p>A forma mais rápida de falar connosco e ver o nosso portfólio.</p>
            <a href="https://www.instagram.com/surd.pt" target="_blank" rel="noopener noreferrer" className={styles.button}>
              Enviar Mensagem
            </a>
          </div>

          {/* Email Option */}
          <div className={styles.optionItem}>
            <div className={styles.iconCircle}>
              <span className={styles.emailIcon}>✉</span>
            </div>
            <h3>Email</h3>
            <p>Para parcerias, grandes encomendas ou questões formais.</p>
            <a href="mailto:surd4customer@gmail.com" className={styles.buttonSecondary}>
              surd4customer@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <p>Respondemos geralmente em menos de 24 horas.</p>
        </div>
      </section>
    </div>
  );
}