import { useState } from 'react'
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

const btnSeta = {
  background: 'none',
  border: '1px solid var(--color-border)',
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  fontSize: '1.7rem',
  cursor: 'pointer',
  color: 'var(--color-muted)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'border-color 0.2s, color 0.2s',
}

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
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 5%',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '4rem',
          position: 'fixed',
          inset: 0,
          zIndex: 10,
          opacity: revelado ? 0 : 1,
          pointerEvents: revelado ? 'none' : 'auto',
          transition: 'opacity 0.8s ease',
        }}
      >
        <button
          onClick={() => setRevelado(true)}
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.5)',
            color: '#fff',
            padding: '0.75rem 2.5rem',
            borderRadius: '999px',
            fontSize: '1rem',
            cursor: 'pointer',
            letterSpacing: '0.08em',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e =>
            (e.target.style.backgroundColor = 'rgba(255,255,255,0.3)')
          }
          onMouseLeave={e =>
            (e.target.style.backgroundColor = 'rgba(255,255,255,0.15)')
          }
        >
          clique aqui :)
        </button>
      </div>

      {/* Carrossel */}
      <div
        style={{
          opacity: revelado ? 1 : 0,
          transition: 'opacity 0.8s ease 0.4s',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {/* Slide atual */}
        <div
          style={{
            width: '100%',
            maxWidth: '350px',
            height: '400px',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {slides[atual].tipo === 'imagem' ? (
            <img
              src={slides[atual].src}
              alt={slides[atual].legenda}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          ) : (
            <div
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <span style={{ fontSize: '2.5rem' }}>🗺️</span>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  color: 'var(--color-accent)',
                  fontStyle: 'italic',
                }}
              >
                Pronto para começar?
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                Escolha um caminho da barra de navegação :)
              </p>
            </div>
          )}
        </div>

        {/* Legenda + subtítulo abaixo da imagem */}
        {slides[atual].tipo === 'imagem' && (
          <>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                color: 'var(--color-accent)',
                fontSize: '1.2rem',
              }}
            >
              {slides[atual].legenda}
            </p>
            <p
              style={{
                color: 'var(--color-muted)',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              {slides[atual].subtitulo}
            </p>
          </>
        )}

        {/* Botão voltar */}
        {atual === slides.length - 1 && (
          <button
            onClick={voltar}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-muted)',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            ← voltar
          </button>
        )}

        {/* Setas + bolinhas */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button onClick={anterior} style={btnSeta}>
            &#8249;
          </button>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setAtual(i)}
                style={{
                  width: i === atual ? '1.20rem' : '0.5rem',
                  height: '0.55rem',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor:
                    i === atual ? 'var(--color-accent)' : 'var(--color-border)',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button onClick={proximo} style={btnSeta}>
            &#8250;
          </button>
        </div>
      </div>
    </>
  )
}
