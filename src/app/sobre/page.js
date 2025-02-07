import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <div  className={styles.container}>
      <section className={styles.intro}>
        <h1>Quem Somos</h1>
        <p>
          A SURD é uma empresa dedicada a oferecer autocolantes totalmente personalizáveis, respondendo às necessidades de expressão única dos nossos clientes.
        </p>
      </section>

      <section className={styles.missao}>
        <h2>A Nossa Missão</h2>
        <p>
          Oferecer produtos personalizados de alta qualidade que atendam às necessidades e desejos dos nossos clientes, enquanto mantemos um compromisso firme com a sustentabilidade e práticas responsáveis.
        </p>
      </section>

      <section className={styles.equipe}>
        <h2>A Nossa Equipa</h2>
        <p>
          A nossa equipa é formada por profissionais apaixonados pela personalização e pela inovação. Estamos sempre prontos para ouvir nossos clientes e adaptar nossos produtos para melhor atendê-los.
        </p>
      </section>

      <section className={styles.sustentabilidade}>
        <h2>Compromisso com a Sustentabilidade</h2>
        <p>
          Na SURD, estamos comprometidos em adotar práticas sustentáveis em todas as nossas operações. Utilizamos materiais eco-friendly e estamos numa busca consta por maneiras de reduzir nosso impacto ambiental.
        </p>
      </section>

      <section className={styles.tabela}>
        <h2>Valores da Empresa</h2>
        <br/>
        <table>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personalização</td>
              <td>Oferecemos uma vasta gama de opções para personalização dos produtos.</td>
            </tr>
            <tr>
              <td>Sustentabilidade</td>
              <td>Comprometidos com práticas ambientais responsáveis e uso de materiais eco-friendly.</td>
            </tr>
            <tr>
              <td>Qualidade</td>
              <td>Garantimos a melhor qualidade em todos os nossos produtos.</td>
            </tr>
            <tr>
              <td>Inovação</td>
              <td>Estamos sempre à procura de novas ideias e tecnologias para melhorar nossos produtos.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}