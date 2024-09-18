import styles from './FAQ.module.css'

export default function FAQ() {
  return (
    <div className={styles.faqContainer123} style={{marginTop: '20px'}}>
      <section className={styles.faqSection123}>
        <h1 className={styles.faqTitle123}>FAQ</h1>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Como posso comprar?</h2>
          <p className={styles.answer123}>
            É simples: escolha o tamanho, a quantidade, o tipo de corte e se quer ou não que a imagem seja processada por nós
            (todas as informações estão disponíveis nas secções “preços” e “+info”). Se não tiver um desenho, não se preocupe,
            podemos criar um com todos os pormenores que desejar!
            <br />
            (Este serviço tem um custo que dependerá da complexidade do desenho).
            <br /><br />
            Depois disso, basta enviar-nos uma mensagem no Instagram (@surd.pt) e nós tratamos do processo.
          </p>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Que tipos de corte existem?</h2>
          <p className={styles.answer123}>
            Existem 3 tipos de corte: circular, quadrangular ou retangular, e o customizado, sendo este último um corte que acompanha
            toda a forma do produto, não deixando bordas, exceto as de segurança.
          </p>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Que tamanho devo encomendar?</h2>
          <p className={styles.answer123}>
            Para uma resposta mais visual, recomendamos que aceda à página do Instagram da SURD (@surd.pt) e veja o nosso destaque “+info”,
            onde conseguirá esclarecer a sua dúvida.
          </p>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>Qual o melhor modo de utilização?</h2>
          <ol className={styles.stepsList123}>
            <li>Escolha da superfície - Certifique-se de que a superfície onde vai aplicar o autocolante está limpa e seca.</li>
            <li>Preparação - Remova a película protetora cuidadosamente.</li>
            <li>Posicionamento - Posicione o autocolante na superfície sem pressioná-lo totalmente para garantir o alinhamento correto.</li>
            <li>Aplicação - Pressione o centro do autocolante e vá alisando para evitar bolhas de ar. Use um cartão para ajudar.</li>
            <li>Remoção de bolhas - Caso surjam bolhas, utilize um alfinete para perfurá-las e alisar a área com cuidado.</li>
            <li>Ajustes finais - Depois de aplicado, pressione bem todos os cantos para garantir que o autocolante fique completamente fixo.</li>
          </ol>
        </div>

        <div className={styles.questionBlock123}>
          <h2 className={styles.question123}>O que é o tratamento de imagem e a verificação?</h2>
          <p className={styles.answer123}>
            A verificação da imagem consiste em verificar a existência de erros de impressão e corrigi-los,
            bem como garantir que os autocolantes estão em conformidade com a encomenda.
            <br /><br />
            O tratamento de imagem consiste na modificação de qualquer característica técnica relacionada com a imagem,
            como a remoção do fundo, alteração da forma, recorte especial, edição da imagem (contraste, brilho, exposição, etc.),
            remoção ou inserção de objetos, efeitos, inserção de texto, entre outros.
            <br /><br />
            O número de tratamentos representa o número máximo de modificações que podem ser alteradas sem custos adicionais.
            Pode ser aumentado, com um custo adicional de 1€ por tratamento extra.
          </p>
        </div>
      </section>
    </div>
  );
}