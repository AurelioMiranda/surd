import styles from './Materials.module.css';

export default function Materials() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sticker Materials</h1>
      <p className={styles.intro}>
        Choosing the right sticker material is essential for durability, aesthetics, and purpose. Here’s a breakdown of
        the materials we offer: Vinyl and Paper.
      </p>

      {/* Vinyl Stickers */}
      <section className={styles.materialSection}>
        <h2>Vinyl Stickers</h2>
        <img src="/images/vinyl-sticker.jpg" alt="Vinyl Sticker Example" className={styles.materialImage} />
        <p>
          Vinyl stickers are known for their premium quality, durability, and waterproof nature. They’re ideal for
          outdoor and long-term applications, resisting UV rays, water, and scratches.
        </p>

        <h3>Pros:</h3>
        <ul>
          <li>Waterproof & weatherproof</li>
          <li>Long-lasting, resistant to fading</li>
          <li>Strong adhesive, sticks to most surfaces</li>
          <li>Great for outdoor use, bottles, and electronics</li>
        </ul>

        <h3>Cons:</h3>
        <ul>
          <li>More expensive than paper stickers</li>
          <li>Not biodegradable</li>
        </ul>
      </section>

      {/* Paper Stickers */}
      <section className={styles.materialSection}>
        <h2>Paper Stickers</h2>
        <img src="/images/paper-sticker.jpg" alt="Paper Sticker Example" className={styles.materialImage} />
        <p>
          Paper stickers are an eco-friendly and budget-friendly alternative. They are perfect for short-term use,
          packaging, and labeling but are not resistant to water or extreme conditions.
        </p>

        <h3>Pros:</h3>
        <ul>
          <li>Eco-friendly and recyclable</li>
          <li>More affordable</li>
          <li>Lightweight and easy to write on</li>
          <li>Perfect for indoor use and packaging</li>
        </ul>

        <h3>Cons:</h3>
        <ul>
          <li>Not waterproof or weatherproof</li>
          <li>Less durable over time</li>
        </ul>
      </section>

      {/* Comparison Table */}
      <section className={styles.comparisonTable}>
        <h2>Vinyl vs. Paper Stickers</h2>
        <table className={styles.tableComparison}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Vinyl Stickers</th>
              <th>Paper Stickers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Durability</td>
              <td>High (years)</td>
              <td>Low (months)</td>
            </tr>
            <tr>
              <td>Waterproof</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Outdoor Use</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Eco-Friendly</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Best Use Cases</td>
              <td>Cars, bottles, electronics</td>
              <td>Labels, packaging, events</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <details className={styles.faqDetails}>
          <summary>Are vinyl stickers reusable?</summary>
          <p>Most vinyl stickers are designed for one-time use, but removable vinyl options exist.</p>
        </details>
        <details className={styles.faqDetails}>
          <summary>Can paper stickers be laminated for protection?</summary>
          <p>Yes! Laminating paper stickers can add some water resistance but won't make them fully waterproof.</p>
        </details>
        <details className={styles.faqDetails}>
          <summary>Which material is better for business branding?</summary>
          <p>If you need premium, long-lasting stickers, go for vinyl. For packaging and labels, paper is a great choice.</p>
        </details>
      </section>
    </div>
  );
}
