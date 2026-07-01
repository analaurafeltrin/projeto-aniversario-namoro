import { useAudio, playlist } from '../../context/AudioContext'

export default function MiniPlayer() {
  const { tocando, faixaAtual, togglePlay, proxima, anterior } = useAudio()

  const faixa = playlist[faixaAtual]

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 100,
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '1rem',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(8px)',
        maxWidth: '220px',
      }}
    >
      {/* Emoji da faixa*/}
      <span
        style={{
          fontSize: '1.4rem',
          animation: tocando ? 'pulse 2s infinite' : 'none',
        }}
      >
        {faixa.emoji}
      </span>

      {/* Info da música */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <p
          style={{
            fontSize: '0.8rem',
            fontWeight: 500,
            color: 'var(--color-text)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {faixa.titulo}
        </p>
        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--color-muted)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {faixa.artista}
        </p>
      </div>

      {/* Controles */}
      <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
        <button onClick={anterior} style={btnControle} aria-label='Anterior'>
          ⏮
        </button>
        <button
          onClick={togglePlay}
          style={{ ...btnControle, fontSize: '1rem' }}
          aria-label='Play/Pausa'
        >
          {tocando ? '⏸​' : '▶'}
        </button>
        <button onClick={proxima} style={btnControle} aria-label='Próxima'>
          ⏭
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.15); }
        }
      `}</style>
    </div>
  )
}

const btnControle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.85rem',
  padding: '0.2rem',
  color: 'var(--color-text)',
  lineHeight: 1,
}
