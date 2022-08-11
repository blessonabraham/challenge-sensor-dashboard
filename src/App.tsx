import { createRoot } from 'react-dom/client'
import { Store } from './Store/Store';
import "./App.scss"

createRoot(document.getElementById('root') as HTMLElement).render(<Store/>)