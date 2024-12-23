// menuHandler.js
class MenuHandler {
    constructor(menuConfig) {
      this.menuConfig = menuConfig;
      this.contentCache = new Map();
      this.currentPage = null;
      this.initializeSidebar();
      this.setupEventListeners();
    }
  
    initializeSidebar() {
      const sidebarContent = document.querySelector('.sidebar-content');
      sidebarContent.innerHTML = this.generateMenuHTML();
    }
  
    generateMenuHTML() {
      return Object.entries(this.menuConfig)
        .map(([key, section]) => {
          const submenuItems = Object.entries(section.submenu)
            .map(([subKey, item]) => `
              <a data-page="${subKey}" data-content-path="${item.contentPath}">
                ${item.label}
              </a>
            `).join('');
  
          return `
            <div class="menu-item">
              <a class="menu-toggle-btn" data-submenu="${key}-submenu">
                ${section.icon} ${section.label}
                <span class="submenu-arrow">▼</span>
              </a>
              <div class="submenu" id="${key}-submenu">
                ${submenuItems}
              </div>
            </div>
          `;
        }).join('');
    }
  
    async loadContent(contentPath) {
      try {
        // Check cache first
        if (this.contentCache.has(contentPath)) {
          return this.contentCache.get(contentPath);
        }
  
        const response = await fetch(contentPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const content = await response.text();
        
        // Cache the content
        this.contentCache.set(contentPath, content);
        return content;
      } catch (error) {
        console.error('Error loading content:', error);
        return `<div class="error-message">
                  <h2>Content Unavailable</h2>
                  <p>Sorry, we couldn't load the requested content. Please try again later.</p>
                </div>`;
      }
    }
  
    setupEventListeners() {
      // Menu toggle button
      const menuToggle = document.querySelector('.menu-toggle');
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.overlay');
  
      menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
      });
  
      // Submenu toggles
      document.querySelectorAll('.menu-toggle-btn').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const submenuId = toggle.getAttribute('data-submenu');
          const submenu = document.getElementById(submenuId);
          
          // Close other submenus
          document.querySelectorAll('.submenu.active').forEach(menu => {
            if (menu.id !== submenuId) {
              menu.classList.remove('active');
              menu.previousElementSibling.classList.remove('active');
            }
          });
  
          toggle.classList.toggle('active');
          submenu.classList.toggle('active');
        });
      });
  
      // Content loading
      document.querySelectorAll('.submenu a').forEach(item => {
        item.addEventListener('click', async (e) => {
          e.preventDefault();
          const contentPath = item.getAttribute('data-content-path');
          const page = item.getAttribute('data-page');
          
          // Close sidebar on mobile
          sidebar.classList.remove('active');
          overlay.classList.remove('active');
          menuToggle.classList.remove('active');
  
          // Load and display content
          const content = await this.loadContent(contentPath);
          const contentDiv = document.querySelector('.content');
          contentDiv.innerHTML = content;
  
          // Update active state
          if (this.currentPage) {
            document.querySelector(`[data-page="${this.currentPage}"]`)?.classList.remove('active');
          }
          item.classList.add('active');
          this.currentPage = page;
        });
      });
  
      // Overlay click handler
      overlay?.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
  
    // Method to clear cache if needed
    clearCache() {
      this.contentCache.clear();
    }
  }
  
  export default MenuHandler;