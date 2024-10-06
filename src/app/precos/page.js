import styles from './Precos.module.css'

export default function Precos() {
  return (
    <div className={styles.precosContainer987} style={{marginTop: '20px'}}>
      <section className={styles.precosSection987}>
        <h1 className={styles.precosTitle987}>Preçário</h1>

        <div className={styles.priceImageContainer987}>
          <img src="square-or-rectangle-price.jpeg" alt="Stickers price per unit (rectangular)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 1- Preço de stickers retangulares por unidade</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="circular-or-customized-price.jpeg" alt="Stickers price per unit (circular/customizable)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 2- Preço dos stickers por unidade (corte circular/customizado)</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="shipping-costs.jpeg" alt="Shipping costs" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 3- Portes de envio</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="treatment-prices.jpeg" alt="Treatment prices" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 4- Preços de tratamento</p>
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