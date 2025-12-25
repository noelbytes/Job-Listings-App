import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // Takes the root element, and renders the React application into it. The root element here is the div with id 'root' in index.html
  <StrictMode> {/* StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, i.e. components. StrictMode is a component too. */}
    <App />
  </StrictMode>,
)
