import { createContext, useContext, useRef, useState } from 'react'

import faixa1 from '../../assets/audio/Ma-Meilleure-Ennemie.mp3'
import faixa2 from '../../assets/audio/Dinossauros.mp3'
import faixa3 from '../../assets/audio/Sucker.mp3'
import faixa4 from '../../assets/audio/Fumes.mp3'
import faixa5 from '../../assets/audio/Babydoll.mp3'

export const playlist = [
  {
    id: 0,
    titulo: 'Ma Meilleure Ennemie',
    artista: 'League of Legends, Pomme e Stromae',
    src: faixa1,
    emoji: '🎭',
  },
  { id: 1, titulo: 'Dinossauros', artista: 'DINGO', src: faixa2, emoji: '🦕' },
  {
    id: 2,
    titulo: 'Sucker',
    artista: 'League of Legends, Marcus King',
    src: faixa3,
    emoji: '🩸',
  },
  { id: 3, titulo: 'Fumes', artista: 'Lostnote', src: faixa4, emoji: '💨' },
  {
    id: 4,
    titulo: 'Babydoll',
    artista: 'Dominic Fike',
    src: faixa5,
    emoji: '👧',
  },
]

const AudioContext = createContext(null)

export function AudioProvider({ children }) {
  const audioRef = useRef(null)
  const [tocando, setTocando] = useState(false)
  const [faixaAtual, setFaixaAtual] = useState(0)
  const [jaTocouAntes, setJaTocouAntes] = useState(false)

  function tocar(indice) {
    const audio = audioRef.current
    if (!audio) return

    if (indice === faixaAtual && tocando) {
      audio.pause()
      setTocando(false)
      return
    }

    if (indice !== faixaAtual || !audio.src) {
      audio.src = playlist[indice].src
      setFaixaAtual(indice)
    }

    audio.play()
    setTocando(true)
    setJaTocouAntes(true)
  }

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (tocando) {
      audio.pause()
      setTocando(false)
    } else {
      audio.play()
      setTocando(true)
    }
  }

  function proxima() {
    const proximo = (faixaAtual + 1) % playlist.length
    tocar(proximo)
  }

  function anterior() {
    const ant = (faixaAtual - 1 + playlist.length) % playlist.length
    tocar(ant)
  }

  return (
    <AudioContext.Provider
      value={{
        tocando,
        faixaAtual,
        tocar,
        togglePlay,
        proxima,
        anterior,
        jaTocouAntes,
      }}
    >
      <audio ref={audioRef} onEnded={proxima} />
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => useContext(AudioContext)
