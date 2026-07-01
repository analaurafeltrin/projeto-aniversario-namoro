import { useEffect } from 'react'
import { useAudio, playlist } from '../assets/context/AudioContext'

export default function SoundPage() {
  const { tocando, faixaAtual, tocar, togglePlay, proxima, anterior } =
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
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [togglePlay, proxima, anterior])

  return (
    <div
      style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '3rem 1.5rem 8rem',
      }}
    >
      {/* Cabeçalho */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p
          style={{
            fontSize: '1rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-muted)',
            marginBottom: '0.5rem',
          }}
        >
          nossa trilha sonora
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            color: 'var(--color-accent)',
            fontStyle: 'italic',
          }}
        >
          Músicas que a gente gosta
        </h1>
        <p
          style={{
            color: 'var(--color-muted)',
            fontSize: '1rem',
            marginTop: '0.75rem',
          }}
        >
          São raras... Nosso gosto musical é uma das únicas coisas que temos de
          diferente :(
        </p>
      </div>

      {/* Lista de músicas */}
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        {playlist.map((faixa, i) => {
          const ativa = faixaAtual === i
          const estaTocando = ativa && tocando

          return (
            <li key={faixa.id}>
              <button
                onClick={() => tocar(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '0.875rem',
                  border: ativa
                    ? '1px solid var(--color-accent)'
                    : '1px solid var(--color-border)',
                  backgroundColor: ativa
                    ? 'var(--color-surface)'
                    : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: ativa
                    ? '0 2px 12px rgba(201,123,132,0.15)'
                    : 'none',
                }}
              >
                {/* Número ou emoji animado */}
                <span
                  style={{
                    fontSize: '1.3rem',
                    minWidth: '2rem',
                    textAlign: 'center',
                    animation: estaTocando ? 'pulse 2s infinite' : 'none',
                  }}
                >
                  {estaTocando ? '♫' : faixa.emoji}
                </span>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: ativa ? 500 : 400,
                      color: ativa
                        ? 'var(--color-accent)'
                        : 'var(--color-text)',
                      marginBottom: '0.15rem',
                    }}
                  >
                    {faixa.titulo}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {faixa.artista}
                  </p>
                </div>

                {/* Ícone play/pause */}
                <span
                  style={{
                    fontSize: '1rem',
                    color: ativa ? 'var(--color-accent)' : 'var(--color-muted)',
                  }}
                >
                  {estaTocando ? '⏸' : '▶'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
