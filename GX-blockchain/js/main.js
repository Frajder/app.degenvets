import { loadContent } from './contentloader.js';

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const menuItems = document.querySelectorAll('.submenu a');
const contentSections = document.querySelectorAll('.content-section');
const connectBtn = document.querySelector('.connect-btn');

// Menu toggle handler
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Overlay click handler
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Connect button handler
connectBtn.addEventListener('click', () => {
    console.log('Connect button clicked');
});

// Menu items click handlers
menuItems.forEach(item => {
    item.addEventListener('click', async () => {
        event.preventDefault();
        const page = item.getAttribute('data-page');
        if (pageName) {
        await loadContent(pageName);
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(page);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.classList.add('fade');
        }
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
    });
});

// Submenu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle submenu toggles
    const menuToggles = document.querySelectorAll('.menu-toggle-btn');
    
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const submenuId = this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            
            // Toggle active classes
            this.classList.toggle('active');
            if (submenu) {
                submenu.classList.toggle('active');
            }
            
            // Close other submenus
            const otherSubmenus = document.querySelectorAll('.submenu.active');
            const otherToggles = document.querySelectorAll('.menu-toggle-btn.active');
            
            otherSubmenus.forEach(other => {
                if (other.id !== submenuId) {
                    other.classList.remove('active');
                }
            });
            
            otherToggles.forEach(other => {
                if (other !== this) {
                    other.classList.remove('active');
                }
            });
        });
    });
    
    // Handle submenu item clicks
    const submenuItems = document.querySelectorAll('.submenu a');
    
    submenuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Close the sidebar when a submenu item is clicked
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            const menuToggle = document.querySelector('.menu-toggle');
            
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});

    const gearToggle = document.querySelector('.gear-toggle');
    if (gearToggle) {
        gearToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const submenuId = this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            
            // Toggle active classes
            this.classList.toggle('active');
            submenu.classList.toggle('active');
        });
    }
    
    // Close gear submenu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.gear-menu')) {
            const gearSubmenu = document.querySelector('.gear-submenu');
            const gearToggle = document.querySelector('.gear-toggle');
            if (gearSubmenu) {
                gearSubmenu.classList.remove('active');
            }
            if (gearToggle) {
                gearToggle.classList.remove('active');
            }
        }

        const gearToggle = document.querySelector('.gear-toggle');
        if (gearToggle) {
            gearToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const submenuId = this.getAttribute('data-submenu');
                const submenu = document.getElementById(submenuId);
                
                // Toggle active classes
                this.classList.toggle('active');
                submenu.classList.toggle('active');
            });
        }
        
        // Close gear submenu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.gear-menu')) {
                const gearSubmenu = document.querySelector('.gear-submenu');
                const gearToggle = document.querySelector('.gear-toggle');
                if (gearSubmenu) {
                    gearSubmenu.classList.remove('active');
                }
                if (gearToggle) {
                    gearToggle.classList.remove('active');
                }
            }
        });
    });

try {
     const { initializeMarket } = await import('./market.js');
     const { initializeChat } = await import('./chat.js');
     const { loadContent, initializeContentLoader } = await import('./contentLoader.js');
    
     // Initialize additional modules
     initializeMarket();
     initializeChat();
     initializeContentLoader();
 } catch (error) {
     console.error('Error loading modules:', error);
 }