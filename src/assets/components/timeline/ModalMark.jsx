import { useEffect } from 'react'
import styles from '../../styles/ModalMark.module.css'

export default function ModalMark({ marco, onFechar }) {
  useEffect(() => {
    const aoPressionarTecla = e => {
      if (e.key === 'Escape') onFechar()
    }
    document.addEventListener('keydown', aoPressionarTecla)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', aoPressionarTecla)
      document.body.style.overflow = ''
    }
  }, [onFechar])

  return (
    <div onClick={onFechar} className={styles.fundo}>
      <div onClick={e => e.stopPropagation()} className={styles.card}>
        <button onClick={onFechar} className={styles.botaoFechar}>
          ✕
        </button>

        <img
          src={marco.imagem}
          alt={marco.titulo}
          className={styles.imagem}
          style={{ objectPosition: marco.focoImagem || 'center center' }}
        />

        <div className={styles.conteudo}>
          <p className={styles.dataTexto}>{marco.data}</p>
          <p className={styles.titulo}>{marco.titulo}</p>
          <p className={styles.legenda}>{marco.legenda}</p>
        </div>
      </div>
    </div>
  )
}
