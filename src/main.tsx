import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MessageFlowContextProvider from './context/MessageFlow.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MessageFlowContextProvider>
      <App />
    </MessageFlowContextProvider>
  </React.StrictMode>,
)
