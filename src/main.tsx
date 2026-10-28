import { createRoot } from 'react-dom/client';
import { LangProvider } from './lib/lang';
import App from './App';
import './styles.css';
createRoot(document.getElementById('root')!).render(<LangProvider><App /></LangProvider>);
