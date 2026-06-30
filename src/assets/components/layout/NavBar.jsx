import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const links = [
  { label: 'Início', to: '/' },
  { label: 'Do Começo', to: '/timeline' },
  { label: 'Dedicatória', to: '/dedicatoria' },
  { label: 'Quiz', to: '/quiz' },
  { label: 'Mapa', to: '/mapa' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Som ambiente', to: '/som-ambiente' },
]

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: 'var(--color-surface)',
  borderBottom: '1px solid var(--color-border)',
  backdropFilter: 'blur(8px)',
}

const linkStyle = {
  fontSize: '1rem',
  textTransform: 'uppercase',
  color: 'var(--color-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  padding: '0.25rem 0',
}

const activeLinkStyle = {
  ...linkStyle,
  color: 'var(--color-accent)',
  borderBottom: '1px solid var(--color-accent)',
}

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav style={navStyle}>
      <div
        style={{
          maxWidth: '1500px',
          margin: '0 auto',
          padding: '0.8rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavLink
          to='/'
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            color: 'var(--color-accent)',
            textDecoration: 'none',
            fontStyle: 'italic',
          }}
        >
          Ana & Areus
        </NavLink>

        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            alignItems: 'center',
          }}
          className='nav-desktop'
        >
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : linkStyle
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Toggle tema + hamburguer */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button
            onClick={toggle}
            aria-label='Alternar tema'
            style={{
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: '999px',
              padding: '0.3rem 0.75rem',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'var(--color-text)',
            }}
          >
            {theme === 'light' ? '⏾' : '☀︎'}
          </button>

          <button
            onClick={() => setOpen(o => !o)}
            aria-label='Menu'
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.6rem',
              color: 'var(--color-text)',
              display: 'none',
            }}
            className='nav-hamburger'
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <ul
          style={{
            listStyle: 'none',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                })}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
