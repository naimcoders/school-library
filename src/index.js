import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from 'styled-components'

const queryClient = new QueryClient()

const theme = {
  background: {
    color1: '#F4EEFF',
    color2: '#DCD6F7',
    color3: '#A6B1E1',
    color4: '#424874',
    white: '#FFFFFF'
  },
  color: {
    white: '#FFFFFF',
    black: '#252525',
    blueLess: '#424874'
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)