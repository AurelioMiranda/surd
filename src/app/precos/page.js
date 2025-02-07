import styles from './Precos.module.css'

export default function Precos() {
  return (
    <div className={styles.precosContainer987} style={{ marginTop: '20px', marginBottom: '20px' }}>
      <section className={styles.precosSection987}>
        <h1 className={styles.precosTitle987}>Preçário</h1>
        {/*
        <h2 className={styles.precosTitle958}>Stickers Clássicos</h2>

        <div className={styles.priceImageContainer987}>
          <img src="square-or-rectangle-price.jpeg" alt="Stickers price per unit (rectangular)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 1 - Preço por unidade dos stickers quadrangulares e retangulares.</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="circular-or-customized-price.jpeg" alt="Stickers price per unit (circular/customizable)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 2 - Preço por unidade dos stickers com corte circular/customizado.</p>
        </div>*/
        }
        <h2 className={styles.precosTitle958}>Stickers customizados</h2>

        <div className={styles.priceImageContainer987}>
          <img src="vinyl-square-rectangular.jpeg" alt="Stickers price per unit (rectangular)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 1 - Preço por unidade dos stickers quadrangulares e retangulares.</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="vinyl-custom-circular.jpeg" alt="Stickers price per unit (circular/customizable)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 2 - Preço por unidade dos stickers com corte circular/customizado.</p>
        </div>

        <h2 className={styles.precosTitle958}>Stickers para superfícies de vidro</h2>

        <div className={styles.priceImageContainer987}>
          <img src="glass-stickers.jpeg" alt="Stickers price per unit (glass)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 3 - Preço por unidade dos stickers para vidro quadrangulares.</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="InstaStickersPrice.jpeg" alt="Stickers price per unit (instagram)" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 4 - Preço por unidade dos insta stickers.</p>
        </div>

        <h2 className={styles.precosTitle958}>Tatuagens temporárias</h2>

        <div className={styles.priceImageContainer987}>
          <img src="temporary-tattoos.jpeg" alt="Temporary tattoos" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 5 - Preço por unidade das tatuagens temporárias.</p>
        </div>

        <h2 className={styles.precosTitle958}>Serviços e tarifas</h2>

        <div className={styles.priceImageContainer987}>
          <img src="shippingCosts.jpeg" alt="Shipping costs" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 6 - Portes de envio.</p>
        </div>

        <div className={styles.priceImageContainer987}>
          <img src="treatment-prices.jpeg" alt="Treatment prices" className={styles.precoImage987} />
          <p className={styles.imageCaption987}>Figura 7 - Preço do tratamento de imagem, em função da quantidade encomendada.</p>
        </div>

        <div className={styles.deliveryInfo987}>
          <p>
            Tenha em atenção que o prazo de entrega e de produção varia entre <strong>10 e 15 dias</strong>,
            consoante a encomenda. Garantimos que a qualidade dos nossos produtos compensa qualquer tempo de espera adicional!
          </p>
        </div>
      </section>
    </div>
  );
}