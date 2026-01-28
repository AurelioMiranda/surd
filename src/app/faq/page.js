import styles from './FAQ.module.css'

export default function FAQ() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FAQ</h1>

      <section className={styles.faqSection}>
        
        <div className={styles.questionBlock}>
          <h2 className={styles.question}>Como posso comprar?</h2>
          <p className={styles.answer}>
            Através do nosso site, clicando no carrinho no canto superior direito ou entrando em contacto direto pelo nosso Instagram {' '}
            <a href="https://www.instagram.com/surd.pt/" target="_blank" rel="noopener noreferrer">
              @surd.pt
            </a>.
          </p>
        </div>

        <div className={styles.questionBlock}>
          <h2 className={styles.question}>O que é o tratamento de imagem?</h2>
          <p className={styles.answer}>
            Consiste na modificação técnica da imagem: retirar fundos, ajustar brilho/contraste, colocar efeitos ou inserir texto. 
            Cada encomenda inclui um número base de tratamentos; edições extra têm um custo de 1€ por imagem.
          </p>
        </div>

        <div className={styles.questionBlock}>
          <h2 className={styles.question}>Que tipos de corte existem?</h2>
          <p className={styles.answer}>
            Oferecemos três opções: <strong>Circular</strong>, <strong>Quadrangular/Retangular</strong> e o <strong>Customizado</strong> (corte que segue exatamente o contorno do seu desenho).
          </p>
        </div>

        <div className={styles.questionBlock}>
          <h2 className={styles.question}>Quais as características das tatuagens?</h2>
          <ul className={styles.tattooList}>
            <li>Duração aproximada de 3-5 dias.</li>
            <li>Indicado para peles sensíveis e testadas dermatologicamente.</li>
            <li>Material seguro, não tóxico e eco-friendly.</li>
            <li>Recomendado para crianças a partir dos 3 anos.</li>
          </ul>
        </div>

        <div className={styles.questionBlock}>
          <h2 className={styles.question}>Como devo aplicar as tatuagens?</h2>
          <ol className={styles.stepsList}>
            <li>Limpe e seque bem a zona escolhida (sem pelos).</li>
            <li>Retire a película protetora sobre a tatuagem.</li>
            <li>Coloque o desenho sobre a pele.</li>
            <li>Umedeça o papel e pressione por alguns segundos.</li>
            <li>Retire o papel cuidadosamente e deixe secar.</li>
          </ol>
        </div>

        <div className={styles.questionBlock}>
          <h2 className={styles.question}>Como devo aplicar os stickers?</h2>
          <ol className={styles.stepsList}>
            <li>Certifique-se de que a superfície está limpa e seca.</li>
            <li>Remova a película protetora cuidadosamente.</li>
            <li>Posicione sem pressionar totalmente para garantir o alinhamento.</li>
            <li>Pressione do centro para as bordas para evitar bolhas.
              <div className={styles.subSteps}>
                <strong>Dica:</strong> Se surgirem bolhas, use um alfinete para perfurá-las e alise com um cartão.
              </div>
            </li>
            <li>Pressione bem os cantos para garantir a fixação final.</li>
          </ol>
        </div>

      </section>
    </div>
  );
}