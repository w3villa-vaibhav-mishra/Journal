import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Router from './Router.jsx';
createRoot(document.getElementById('root')).render(
    <Router />
)
