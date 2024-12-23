import { initializeMarket } from './market.js';
import { initializeDashboard } from './dashboard.js';
import { initializeChat } from './chat.js';
import { initializeSubmenu } from './submenu.js';
import menuConfig from './menuConfig.js';
import MenuHandler from './menuHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuHandler = new MenuHandler(menuConfig);

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

    const defaultContentPath = '/content/dashboard.html';
    menuHandler.loadContent(defaultContentPath)
      .then(content => {
        document.querySelector('.content').innerHTML = content;
      });
  });