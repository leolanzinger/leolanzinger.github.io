import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './styles/reset.css'
import './styles/index.css'
import { AnimatePresence } from "framer-motion"
import App from './App'

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
