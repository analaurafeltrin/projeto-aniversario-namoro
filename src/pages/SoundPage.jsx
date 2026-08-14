import { useEffect } from 'react'
import styles from '../assets/styles/SoundPage.module.css'
import { useAudio, playlist } from '../assets/context/AudioContext'

export default function SoundPage() {
  const { tocando, faixaAtual, tocar, togglePlay, proxima, anterior, fechar } =
    useAudio()

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')
        return
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
      }
      if (e.code === 'ArrowRight') {
        e.preventDefault()
        proxima()
      }
      if (e.code === 'ArrowLeft') {
        e.preventDefault()
        anterior()
      }
      if (e.code === 'Escape') {
        e.preventDefault()
        fechar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [togglePlay, proxima, anterior, fechar])

  return (
    <div className={styles.pagina}>
      {/* Cabeçalho */}
      <div className={styles.cabecalho}>
        <p className={styles.rotulo}>nossa trilha sonora</p>
        <h1 className={styles.titulo}>Músicas que a gente gosta</h1>
        <p className={styles.descricao}>
          São raras... Nosso gosto musical é uma das únicas coisas que temos de
          diferente :(
        </p>
      </div>

      {/* Lista de músicas */}
      <ul className={styles.lista}>
        {playlist.map((faixa, i) => {
          const ativa = faixaAtual === i
          const estaTocando = ativa && tocando

          return (
            <li key={faixa.id}>
              <button
                onClick={() => tocar(i)}
                className={`${styles.faixaBotao} ${ativa ? styles.ativa : ''}`}
              >
                {/* Número ou emoji animado */}
                <span
                  className={`${styles.icone} ${estaTocando ? styles.tocando : ''}`}
                >
                  {estaTocando ? '♫' : faixa.emoji}
                </span>

                {/* Info */}
                <div className={styles.info}>
                  <p
                    className={`${styles.faixaTitulo} ${ativa ? styles.ativa : ''}`}
                  >
                    {faixa.titulo}
                  </p>
                  <p className={styles.faixaArtista}>{faixa.artista}</p>
                </div>

                {/* Ícone play/pause */}
                <span
                  className={`${styles.iconePlayPause} ${ativa ? styles.ativa : ''}`}
                >
                  {estaTocando ? '⏸' : '▶'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
