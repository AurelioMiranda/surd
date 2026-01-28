import styles from './Materials.module.css';

export default function Materials() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Materiais dos Stickers</h1>
      <p className={styles.intro}>
        Escolher o material certo para os seus autocolantes é essencial para a sua durabilidade, estética e propósito.
        Aqui está uma análise dos materiais que oferecemos.
      </p>

      {/* Vinyl Stickers */}
      <section className={styles.materialSection}>
        <div className={styles.imageWrapper}>
          <img src="/sticker-materials/vinyl.jpeg" alt="Vinyl Sticker Example" className={styles.materialImage} />
        </div>
        <div className={styles.materialContent}>
          <h2>Stickers de Vinil</h2>
          <p>
            Os Stickers de vinil são conhecidos pela sua qualidade premium, durabilidade e por serem à prova de água.
            São ideais para o exterior, resistindo a raios UV, água e riscos.
          </p>
          <h3>Pros:</h3>
          <ul className={styles.prosList}>
            <li>À prova de água e resistente ao tempo</li>
            <li>Longa duração e resistente a desvanecimento</li>
            <li>Adesivo forte para qualquer superfície</li>
            <li>Ótimo para garrafas e eletrónicos</li>
          </ul>
          <h3>Contras:</h3>
          <ul className={styles.consList}>
            <li>Investimento superior ao papel</li>
          </ul>
        </div>
      </section>

      {/* Paper Stickers */}
      <section className={styles.materialSection}>
        <div className={styles.imageWrapper}>
          <img src="/sticker-materials/paper.jpeg" alt="Paper Sticker Example" className={styles.materialImage} />
        </div>
        <div className={styles.materialContent}>
          <h2>Stickers de Papel</h2>
          <p>
            Uma alternativa ecologicamente correta e económica. Perfeitos para uso de curto prazo,
            etiquetagem de encomendas e organização interior.
          </p>
          <h3>Pros:</h3>
          <ul className={styles.prosList}>
            <li>Opção mais económica</li>
            <li>Leve e fácil de escrever por cima</li>
            <li>Perfeito para packaging e eventos</li>
          </ul>
          <h3>Contras:</h3>
          <ul className={styles.consList}>
            <li>Não resistente à água ou humidade</li>
            <li>Menor durabilidade externa</li>
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <section className={styles.comparisonTable}>
        <h2>Vinil vs. Papel</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.tableComparison}>
            <thead>
              <tr>
                <th>Característica</th>
                <th>Vinil</th>
                <th>Papel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Durabilidade</strong></td>
                <td>Alta (Anos)</td>
                <td>Média (Meses)</td>
              </tr>
              <tr>
                <td><strong>À prova de água</strong></td>
                <td>Sim</td>
                <td>Não</td>
              </tr>
              <tr>
                <td><strong>Uso exterior</strong></td>
                <td>Sim</td>
                <td>Não recomendado</td>
              </tr>
              <tr>
                <td><strong>Sustentabilidade</strong></td>
                <td>Biodegradável</td>
                <td>Reciclável</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <h2>Perguntas Frequentes</h2>
        <details className={styles.faqDetails}>
          <summary>Os autocolantes de vinil são reutilizáveis?</summary>
          <p>A maioria é projetada para uma aplicação permanente, mas a sua remoção não deixa resíduos na maioria das superfícies.</p>
        </details>
        <details className={styles.faqDetails}>
          <summary>Adesivos de papel podem ser laminados?</summary>
          <p>Sim! Laminar adiciona uma camada de proteção contra riscos, mas o núcleo de papel ainda pode absorver humidade lateralmente.</p>
        </details>
        <details className={styles.faqDetails}>
          <summary>Qual o melhor para branding de packaging?</summary>
          <p>Para selar caixas e envelopes, o papel é excelente. Para logótipos que o cliente vá guardar (em portáteis, etc), o vinil é a melhor escolha.</p>
        </details>
      </section>
    </div>
  );
}