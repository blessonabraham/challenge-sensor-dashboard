import { createRoot } from 'react-dom/client'
import { Store } from './Store/Store';
import "./App.scss"

// To-DO
// Caching
// Unit Tests
// ReadMe
// Search Icon
// Move text to constants

createRoot(document.getElementById('root') as HTMLElement).render(<Store/>)