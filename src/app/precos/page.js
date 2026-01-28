import styles from './Precos.module.css'

export default function Precos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Preçário</h1>

      {/* SECTION 1: CUSTOM STICKERS */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Stickers Customizados</h2>
        <div className={styles.priceGrid}>
          <div className={styles.imageCard}>
            <img src="vinyl-square-rectangular.jpeg" alt="Stickers price per unit (rectangular)" className={styles.precoImage} />
            <p className={styles.imageCaption}>Figura 1 - Stickers quadrangulares e retangulares.</p>
          </div>

          <div className={styles.imageCard}>
            <img src="vinyl-custom-circular.jpeg" alt="Stickers price per unit (circular/customizable)" className={styles.precoImage} />
            <p className={styles.imageCaption}>Figura 2 - Stickers com corte circular/customizado.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIALTY STICKERS */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Superfícies de Vidro & Redes Sociais</h2>
        <div className={styles.priceGrid}>
          <div className={styles.imageCard}>
            <img src="glass-stickers.jpeg" alt="Stickers price per unit (glass)" className={styles.precoImage} />
            <p className={styles.imageCaption}>Figura 3 - Stickers para vidro quadrangulares.</p>
          </div>

          <div className={styles.imageCard}>
            <img src="InstaStickersPrice.jpeg" alt="Stickers price per unit (instagram)" className={styles.precoImage} />
            <p className={styles.imageCaption}>Figura 4 - Preço por unidade dos Insta Stickers.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TATTOOS */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Tatuagens Temporárias</h2>
        <div className={styles.priceGrid}>
          <div className={styles.imageCard}>
            <img src="temporary-tattoos.jpeg" alt="Temporary tattoos" className={styles.precoImage} />
            <p className={styles.imageCaption}>Figura 5 - Preço por unidade das tatuagens temporárias.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEES & SHIPPING */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Serviços e Tarifas</h2>
        <div className={styles.priceGrid}>
          <div className={styles.imageCard}>
            <img src="shippingCosts.jpeg" alt="Shipping costs" className={styles.precoImage} />
            <p className={styles.imageCaption}>Figura 6 - Portes de envio.</p>
          </div>

          <div className={styles.imageCard}>
            <img src="treatment-prices.jpeg" alt="Treatment prices" className={styles.precoImage} />
            <p className={styles.imageCaption}>Figura 7 - Preço do tratamento de imagem.</p>
          </div>
        </div>
      </section>

      {/* DELIVERY NOTICE */}
      <div className={styles.deliveryInfo}>
        <p>
          Tenha em atenção que o prazo de entrega e de produção varia entre <strong>10 e 15 dias</strong>, 
          consoante a encomenda. Garantimos que a qualidade dos nossos produtos compensa qualquer tempo de espera!
        </p>
      </div>
    </div>
  );
}