import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {App} from './core/components/app/App.tsx';

createRoot(document.querySelector('#root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
