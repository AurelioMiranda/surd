'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './Home.module.css';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <img maw={240} width="100%" height="25"
        src="SURD-banner-fixed.png"
        alt="SURD Banner" className='banner-img-desktop' />

      <main role="main" className={styles.container} style={{ marginTop: '1rem' }}>
        <section className={styles.oqueESurd}>
          <h1>O que é a SURD?</h1>
          <p>
            A SURD é uma startup portuguesa que comercializa stickers e tatuagens completamente personalizados por si, de alta qualidade e de forma sustentável.
            Connosco vai poder personalizar TUDO! O seu produto terá o seu design ou caso não tenha um, nós criamo-lo por si, só tem de nos dizer o que deseja!
          </p>
        </section>

        <section className={styles.weeklyStickers}>
          <h2>Stickers da Semana</h2>
          {/* Image carousel */}
          <section className={styles.carouselSection}>
            <Slider {...settings}>
              <div>
                <img style={{ borderRadius: '10px' }} src="/weekly/28d10m/2.png" alt="Carousel Image 1" />
              </div>
              <div>
                <img style={{ borderRadius: '10px' }} src="/weekly/28d10m/3.png" alt="Carousel Image 2" />
              </div>
              <div>
                <img style={{ borderRadius: '10px' }} src="/weekly/28d10m/4.png" alt="Carousel Image 3" />
              </div>
              <div>
                <img style={{ borderRadius: '10px' }} src="/weekly/28d10m/5.png" alt="Carousel Image 4" />
              </div>
              <div>
                <img style={{ borderRadius: '10px' }} src="/weekly/28d10m/6.png" alt="Carousel Image 5" />
              </div>
            </Slider>
          </section>
          <p className={styles.belowCarousel}>
          Para comprar este tipo de artigo entre em contacto connosto através do nosso instagram <a href="https://www.instagram.com/surd.pt/" target="_blank" rel="noopener noreferrer">
              @surd.pt
            </a>.
          </p>
        </section>

        <section className={styles.equipe}>
          <h2>A nossa equipa</h2>
          <p>
            A SURD é composta por diversos elementos, das mais diversas áreas de especialização, estando todos comprometidos com um único objetivo,
            entregar ao cliente o produto certo, na quantidade certa, com a melhor qualidade possível, a um preço justo e no menor tempo possível.
          </p>
        </section>

        <section className={styles.valores}>
          <h2>Os nossos valores</h2>
          <p>
            Nós acreditamos na criatividade, na arte e na sustentabilidade. Queremos que cada pessoa tenha liberdade de expressar o seu estilo de forma acessível e única.
            Comprometemo-nos a trabalhar apenas com empresas que tenham objetivos sustentáveis no curto e médio prazo. Predispomo-nos a, sempre que assim necessitarmos, adquirir as tecnologias mais sustentáveis existentes no mercado, a utilizar materiais eco-friendly na produção dos stickers, como o papel reciclado ou o vinil biodegradável, reduzindo o impacto ambiental.
          </p>
          <p>
            Implementamos práticas de produção eficientes para minimizar o desperdício de materiais e energia e utilizamos embalagens sustentáveis, preferencialmente feitas de materiais reciclados ou biodegradáveis.
          </p>
        </section>

        <section className={styles.sustentabilidade}>
          <h3>Compromisso com a Sustentabilidade</h3>
          <ul>
            <li>A utilização de materiais como papel reciclado ou vinil biodegradável.</li>
            <li>Práticas de produção eficientes, reduzindo o desperdício.</li>
            <li>Embalagens sustentáveis feitas de materiais reciclados ou biodegradáveis.</li>
          </ul>
        </section>
      </main>

      <img maw={240} width="100%" height="25"
        src="SURD-banner-fixed.png"
        alt="SURD Banner" className='banner-img-desktop' />
    </>
  )
}
