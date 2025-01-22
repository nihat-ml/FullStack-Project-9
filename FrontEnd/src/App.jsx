import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import { ROUTES } from './Routes/router'

function App() {
  let route = createBrowserRouter(ROUTES)

  return (
    <RouterProvider router = {route}/>
      
   
  )
}

export default App
