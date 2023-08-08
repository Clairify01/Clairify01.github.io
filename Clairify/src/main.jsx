import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import DonatePage from './pages/DonatePage'
import DiscordPage from './pages/DiscordPage'
import ApplicationPage from './pages/ApplicationPage'
import "./main.scss"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index={true} path='/' element={ <HomePage /> } />
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
