import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout';
import GameController from './components/GameController'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <GameController />
    </Layout>
  </React.StrictMode>,
)
