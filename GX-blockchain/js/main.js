// Imports
import { initializeMarket } from './market.js';
import { initializeChat } from './chat.js';
import menuConfig from './menuConfig.js';
import MenuHandler from './menuHandler.js';
import { loadContent } from './contentLoader.js';

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    initializeSubmenu();
    initializeContentLoader();
});

// Trying to consolidate dashboard.js and submenu.js logic into main.js
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const menuItems = document.querySelectorAll('.sidebar a');
const contentSections = document.querySelectorAll('.content-section');
const connectBtn = document.querySelector('.connect-btn');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

connectBtn.addEventListener('click', () => {
    console.log('Connect button clicked');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const page = item.getAttribute('data-page');
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(page);
        targetSection.classList.add('active');
        targetSection.classList.add('fade');
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Submenu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle submenu toggles
    const menuToggles = document.querySelectorAll('.menu-toggle-btn');
    
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the submenu ID from the data attribute
            const submenuId = this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            
            // Toggle active classes
            this.classList.toggle('active');
            submenu.classList.toggle('active');
            
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