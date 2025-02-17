import styles from './Materials.module.css';

export default function Materials() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Materiais dos Stickers</h1>
      <p className={styles.intro}>
        Escolher o material certo para os seus autocolantes é essencial para a sua durabilidade, estética e propósito.
        Aqui está uma análise dos materiais que oferecemos: Vinil e Papel.
      </p>

      {/* Vinyl Stickers */}
      <section className={styles.materialSection}>
        <h2>Stickers de vinil</h2>
        <img src="/images/vinyl-sticker.jpg" alt="Vinyl Sticker Example" className={styles.materialImage} />
        <p>
          Os Stickers de vinil são conhecidos pela sua qualidade premium, durabilidade e por serem à prova de água.
          São ideais para o exterior, aplicações a longo prazo, resistir raios UV, água e riscos.
        </p>

        <h3>Pros:</h3>
        <ul>
          <li>À prova de água e resistente ao tempo</li>
          <li>Longa duração, resistente a desvanecimento</li>
          <li>Adesivo forte, adere à maior parte das superfícies</li>
          <li>Ótimo para uso externo, garrafas e eletrônicos</li>
        </ul>

        <h3>Contras:</h3>
        <ul>
          <li>Mais caro que autocolantes de papel</li>
        </ul>
      </section>

      {/* Paper Stickers */}
      <section className={styles.materialSection}>
        <h2>Stickers de papel</h2>
        <img src="/images/paper-sticker.jpg" alt="Paper Sticker Example" className={styles.materialImage} />
        <p>
          Adesivos de papel são uma alternativa ecologicamente correta e econômica. São perfeitos para uso de curto prazo,
          encomendas e etiquetagem, mas não são resistentes à água ou condições extremas.
        </p>

        <h3>Pros:</h3>
        <ul>
          <li>Mais barato</li>
          <li>Leve e fácil de escrever por cima</li>
          <li>Perfeito para uso interior e encomendas</li>
        </ul>

        <h3>Contras:</h3>
        <ul>
          <li>Não é à prova d'água ou resistente ao tempo</li>
          <li>Menos durável ao longo do tempo</li>
        </ul>
      </section>

      {/* Comparison Table */}
      <section className={styles.comparisonTable}>
        <h2>Vinvl vs. Papel</h2>
        <table className={styles.tableComparison}>
          <thead>
            <tr>
              <th>Caracteristica</th>
              <th>Vinil</th>
              <th>Papel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Durabilidade</td>
              <td>Alta (anos)</td>
              <td>Baixa (meses)</td>
            </tr>
            <tr>
              <td>À prova de água</td>
              <td>Sim</td>
              <td>Não</td>
            </tr>
            <tr>
              <td>Uso exterior</td>
              <td>Sim</td>
              <td>Não</td>
            </tr>
            <tr>
              <td>Eco-Friendly</td>
              <td>Sim</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Melhores usos</td>
              <td>Carros, garrafas, eletrónicos</td>
              <td>Etiquetas, embalagens, eventos</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <h2>Perguntas frequentes</h2>
        <details className={styles.faqDetails}>
          <summary>Os autocolantes de vinil são reutilizáveis?</summary>
          <p>A maioria dos autocolantes de vinil são projetados para uso único, mas existem opções de vinil removíveis.</p>
        </details>
        <details className={styles.faqDetails}>
          <summary>Adesivos de papel podem ser laminados para proteção?</summary>
          <p>Sim! Laminar autocolantes de papel pode adicionar alguma resistência à água, mas não os tornará totalmente à prova de água.</p>
        </details>
        <details className={styles.faqDetails}>
          <summary>Que material é mais indicado para uma marca empresarial?</summary>
          <p>Se você precisa de autocolantes premium e duradouros, opte por vinil. Para embalagens e rótulos, papel é uma ótima escolha.</p>
        </details>
      </section>
    </div>
  );
}
