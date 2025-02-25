import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'


createRoot(document.getElementById('root')).render(  
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider>      
            <App />
        </AppProvider>
      </BrowserRouter>
    </Provider>    
  </StrictMode>
)
