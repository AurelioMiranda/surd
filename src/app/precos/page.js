import styles from './Precos.module.css'

export default function Precos() {
  return (
    <div className={styles.precosContainer987} style={{marginTop: '20px'}}>
      <section className={styles.precosSection987}>
        <h1 className={styles.precosTitle987}>Preçário</h1>

        <div className={styles.priceImageContainer987}>
          <img src="sticker-prices.png" alt="Tabela de preços dos stickers" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 1- Preço dos stickers</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="shipping-costs.png" alt="Tabela de preços dos portes de envio" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 2- Portes de envio</p>
        </div>

        <div className={styles.deliveryInfo987}>
          <p>
            Tenha em atenção que o prazo de entrega e de produção varia entre <strong>11 e 17 dias</strong>,
            consoante a encomenda. Garantimos que a qualidade dos nossos produtos compensa qualquer tempo de espera adicional!
          </p>
        </div>
      </section>
    </div>
  );
}