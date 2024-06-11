import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='dark: text-white bg-slate-900'>
    <App />
    </div>
  </React.StrictMode>,
)
