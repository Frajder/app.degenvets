import { initializeMarket } from './market.js';
import { initializeDashboard } from './dashboard.js';
import { initializeChat } from './chat.js';
import { initializeSubmenu } from './submenu.js';


document.addEventListener('DOMContentLoaded', () => {
    initializeChat();
});

document.addEventListener('DOMContentLoaded', () => {
initializeDashboard();
});

document.addEventListener('DOMContentLoaded', () => {
    initializeMarket();
    });

    document.addEventListener('DOMContentLoaded', () => {
        initializeSubmenu();
    });