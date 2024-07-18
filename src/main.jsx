import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Context, StoreContextProvider } from './components/context/StoreContext.jsx'
import { food_list } from './assets/food del assets (1)/frontend_assets/assets.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider  value={food_list}>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
