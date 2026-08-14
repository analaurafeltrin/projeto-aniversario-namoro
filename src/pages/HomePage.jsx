import { useState } from 'react'
import styles from '../assets/styles/HomePage.module.css'
import img from '../assets/images/home-page/bg-image.jpg'
import anaLaura from '../assets/images/home-page/ana-laura.jpg'
import areus from '../assets/images/home-page/areus.jpg'

const slides = [
  {
    tipo: 'imagem',
    src: anaLaura,
    legenda: 'Ana Laura Linda',
    subtitulo: 'a linda que fez esse site',
  },
  {
    tipo: 'imagem',
    src: areus,
    legenda: 'Areus Lindo',
    subtitulo: 'o lindo sortudo que recebeu esse presente',
  },
  { tipo: 'texto' },
]

export default function HomePage() {
  const [revelado, setRevelado] = useState(false)
  const [atual, setAtual] = useState(0)

  const anterior = () => setAtual(i => (i === 0 ? slides.length - 1 : i - 1))
  const proximo = () => setAtual(i => (i === slides.length - 1 ? 0 : i + 1))
  const voltar = () => {
    setRevelado(false)
    setAtual(0)
  }

  return (
    <>
      {/* Tela inicial com foto de fundo */}
      <div
        className={`${styles.telaInicial} ${revelado ? styles.escondida : ''}`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <button
          onClick={() => setRevelado(true)}
          className={styles.botaoRevelar}
        >
          clique aqui :)
        </button>
      </div>

      {/* Carrossel */}
      <div className={`${styles.carrossel} ${revelado ? styles.visivel : ''}`}>
        {/* Slide atual */}
        <div className={styles.moldura}>
          {slides[atual].tipo === 'imagem' ? (
            <img
              src={slides[atual].src}
              alt={slides[atual].legenda}
              className={styles.imagemSlide}
            />
          ) : (
            <div className={styles.slideTexto}>
              <span className={styles.iconeMapa}>🗺️</span>
              <p className={styles.slideTextoTitulo}>Pronto para começar?</p>
              <p className={styles.slideTextoSubtitulo}>
                Escolha um caminho da barra de navegação :)
              </p>
            </div>
          )}
        </div>

        {/* Legenda + subtítulo abaixo da imagem */}
        {slides[atual].tipo === 'imagem' && (
          <>
            <p className={styles.legenda}>{slides[atual].legenda}</p>
            <p className={styles.subtitulo}>{slides[atual].subtitulo}</p>
          </>
        )}

        {/* Botão voltar */}
        {atual === slides.length - 1 && (
          <button onClick={voltar} className={styles.botaoVoltar}>
            ← voltar
          </button>
        )}

        {/* Setas + bolinhas */}
        <div className={styles.controles}>
          <button onClick={anterior} className={styles.btnSeta}>
            &#8249;
          </button>

          <div className={styles.pontosContainer}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setAtual(i)}
                className={`${styles.ponto} ${i === atual ? styles.ativo : ''}`}
              />
            ))}
          </div>

          <button onClick={proximo} className={styles.btnSeta}>
            &#8250;
          </button>
        </div>
      </div>
    </>
  )
}
