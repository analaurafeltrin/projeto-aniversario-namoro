import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import { AudioProvider, useAudio } from '../../context/AudioContext'
import Navbar from '../layout/NavBar'
import MiniPlayer from '../layout/MiniPlayer'

function Layout() {
  const { jaTocouAntes, togglePlay, proxima, anterior } = useAudio()

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
    <>
      <Navbar />
      <main style={{ paddingTop: '56px', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      {jaTocouAntes && <MiniPlayer />}
    </>
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <Layout />
      </AudioProvider>
    </ThemeProvider>
  )
}
