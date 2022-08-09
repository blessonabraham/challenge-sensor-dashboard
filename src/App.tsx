import { createRoot } from 'react-dom/client'
import { Store } from './Store/Store';
import "./App.scss"

// To-DO
// Loader for HTTP
// Main URL via Env
// Fallback, Error Boundries
// Utils - Debounce, throttle, Lodash?
// Caching
// Service Workes
// Unit Tests
// ReadMe
// Lint and pritter
// Search Icon
// Move text to constants

createRoot(document.getElementById('root') as HTMLElement).render(<Store/>)