import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '../../context/ThemeContext'
import NavBar from './NavBar'
// import Starfield from '../Starfield'

export default function RootLayout() {
  return (
    <ThemeProvider>
      {/* <Starfield /> */}

      <NavBar />

      <main style={{ paddingTop: '56px', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
    </ThemeProvider>
  )
}
