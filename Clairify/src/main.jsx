import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import DonatePage from './pages/DonatePage.jsx'
import DiscordPage from './pages/DiscordPage.jsx'
import ApplicationPage from './pages/ApplicationPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index={true} path='/' element={ <LandingPage /> } />
      <Route path='/team' element={ <TeamPage /> } />
      <Route path='/donate' element={ <DonatePage /> } />
      <Route path='/discord' element={ <DiscordPage /> } />
      <Route path='/apply' element={ <ApplicationPage /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
