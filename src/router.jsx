import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './assets/components/layout/RootLayout'
import HomePage from './pages/HomePage'
import TimelinePage from './pages/TimelinePage'
import DedicationPage from './pages/DedicationPage'
import QuizPage from './pages/QuizPage'
import MapPage from './pages/MapPage'
import GalleryPage from './pages/GalleryPage'
import SoundPage from './pages/SoundPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/timeline', element: <TimelinePage /> },
      { path: '/dedicatoria', element: <DedicationPage /> },
      { path: '/quiz', element: <QuizPage /> },
      { path: '/mapa', element: <MapPage /> },
      { path: '/galeria', element: <GalleryPage /> },
      { path: '/som-ambiente', element: <SoundPage /> },
    ],
  },
])
