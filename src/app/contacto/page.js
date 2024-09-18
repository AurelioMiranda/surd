import styles from './Contacto.module.css'

export default function Contacto() {
  return (
    <div className={styles.contactContainer321}>
      <section className={styles.contactSection321}>
        <h1 className={styles.contactTitle321}>Contacto</h1>

        <div className={styles.contactTextContainer321}>
          <p>
            Para entrar em contacto connosco utilize o nosso Instagram <a href="https://www.instagram.com/surd.pt" target="_blank" className={styles.contactLink321}>@surd.pt</a>,
            ficaremos contentes em lhe poder ajudar!
          </p>
        </div>
      </section>
    </div>
  );
}