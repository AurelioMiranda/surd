import styles from './FAQ.module.css'

export default function FAQ() {
  return (
    <div className={styles.faqContainer123} style={{ marginTop: '20px', marginBottom: '20px' }}>
      <section className={styles.faqSection123}>
        <h1 className={styles.faqTitle123}>FAQ</h1>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Como posso comprar?</h2>
          <p className={styles.answer123}>
            Através do nosso site, clicando no carrinho que se encontra no canto superior direito da página ou entrando em contacto direto conosco através
            do nosso instagram (<a href="https://www.instagram.com/surd.pt/" target="_blank" rel="noopener noreferrer">
              @surd.pt
            </a>)
          </p>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>O que é o tratamento de imagem?</h2>
          <p className={styles.answer123}>
            O tratamento de imagem consiste na modificação de qualquer característica técnica relacionada com a imagem, como retirar
            o fundo, alterar a forma, editar a imagem (contraste, brilho, exposição, etc.), retirar ou colocar objetos, efeitos, inserir
            texto, entre outros.
            O número de tratamentos representa o número máximo de alterações que podem ser feitas para cada quantidade, sem incorrer em
            custos adicionais. Este pode ser aumentado sem necessidade de encomendar mais unidades, com um custo adicional de 1€ por
            cada tratamento adicional.
          </p>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Que tipos de corte existem?</h2>
          <p className={styles.answer123}>
            Existem 3 tipos de corte: circular, quadrangular ou retangular e o customizado, sendo este último um corte que acompanha
            toda a forma do produto, não deixando bordas, exceto as de segurança.
          </p>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Que tamanho devo encomendar?</h2>
          <p className={styles.answer123}>
            Para uma resposta mais visual, recomendamos que aceda à página do Instagram da SURD (<a href="https://www.instagram.com/surd.pt/" target="_blank" rel="noopener noreferrer">
              @surd.pt
            </a>) e veja o nosso destaque “+info”,
            onde conseguirá esclarecer a sua dúvida.
          </p>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}> Quais as características das tatuagens?</h2>
          <ul className={styles.stepsList123hjjy}>
            <li>Duram aproximadamente entre 3-5 dias.</li>
            <li>Indicado para peles sensíveis.</li>
            <li>Testadas dermatologicamente em laboratório.</li>
            <li>Feitas de um material seguro e não tóxico.</li>
            <li>Recomendado para crianças a partir dos 3 anos de idade.</li>
          </ul>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}> Como devo aplicar as tatuagens?</h2>
          <ol className={styles.stepsList123} start="0">
            <li>Limpe e seque bem a zona escolhida (esta não deve conter pelos).</li>
            <li>Retire a película que está sobre a tatuagem.</li>
            <li>Coloque o desenho da tatuagem sobre a pele.</li>
            <li>Umedeça-o e pressione durante alguns segundos.</li>
            <li>Retire o papel cuidadosamente e deixe secar.</li>
          </ol>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Como devo aplicar os stickers?</h2>
          <ol className={styles.stepsList123}>
            <li>Escolha da superfície - Certifique-se de que a superfície onde vai aplicar o autocolante está limpa e seca.</li>
            <li>Preparação - Remova a película protetora cuidadosamente.</li>
            <li>Posicionamento - Posicione o autocolante na superfície sem pressioná-lo totalmente para garantir o alinhamento correto.</li>
            <li>
              Aplicação - Pressione o centro do autocolante e vá alisando para evitar bolhas de ar. Sugerimos que utilize um cartão para o ajudar.
              <ol className={styles.subStepsList123}>
                <li>Remoção de bolhas - Caso surjam bolhas, utilize um alfinete para perfurá-las e alisar a área com cuidado.</li>
              </ol>
            </li>
            <li>Ajustes finais - Depois de aplicado, pressione bem todos os cantos para garantir que o autocolante fique completamente fixo.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}