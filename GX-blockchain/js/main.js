import { initializeMain } from '../../GX-web/js/main.js';
import { initializeDashboard } from './dashboard.js';
import { initializeChat } from './chat.js';

document.addEventListener('DOMContentLoaded', () => {
initializeMain();
});

document.addEventListener('DOMContentLoaded', () => {
    initializeChat();
});

document.addEventListener('DOMContentLoaded', () => {
initializeDashboard();
});
