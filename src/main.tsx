import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // 이건 없으면 그냥 이 줄 삭제해도 돼

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
