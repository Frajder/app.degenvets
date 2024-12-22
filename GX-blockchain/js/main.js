import { initializeMain } from '../../GX-web/js/main.js';
import { initializeDashboard } from './dashboard.js';

document.addEventListener('DOMContentLoaded', () => {
initializeMain();
});

document.addEventListener('DOMContentLoaded', () => {
    initializeToggle(); // Initialize the toggle menu
});

document.addEventListener('DOMContentLoaded', () => {
initializeDashboard();
});
