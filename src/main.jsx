import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Components/routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
// main.jsx
import AuthProvider from './Components/Provider/Authprovider.jsx';  // Corrected the casing

// ... rest of the code

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
</React.StrictMode>,
)