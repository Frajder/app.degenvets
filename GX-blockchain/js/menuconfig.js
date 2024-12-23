// menuConfig.js for everything in the menu
const menuConfig = {
    profile: {
      label: "Profile",
      icon: "👤",
      submenu: {
        inbox: {
          label: "Inbox",
          contentPath: "./profile/inbox.html"
        },
        settings: {
          label: "Settings",
          contentPath: "./profile/settings.html"
        },
        security: {
          label: "Security",
          contentPath: "./profile/security.html"
        },
        preferences: {
          label: "Preferences",
          contentPath: "./profile/preferences.html"
        }
      }
    },
    portfolio: {
      label: "Portfolio",
      icon: "💼",
      submenu: {
        wallet: {
          label: "Wallet",
          contentPath: "./portfolio/wallet.html"
        },
        achievements: {
          label: "Achievements",
          contentPath: "./portfolio/achievements.html"
        },
        rank: {
          label: "Rank",
          contentPath: "./portfolio/rank.html"
        }
      }
    },
    market: {
      label: "Market",
      icon: "🏪",
      submenu: {
        marketplace: {
          label: "Marketplace",
          contentPath: "./market/marketplace.html"
        },
        issues: {
          label: "Issues",
          contentPath: "./market/issues.html"
        },
        bugs: {
          label: "Bugs",
          contentPath: "./market/bugs.html"
        }
        wanted: {
            label: "Wanted",
            contentPath: "./market/wanted.html"
          }
      }
    },
    workTickets: {
      label: "Work Tickets",
      icon: "📝",
      submenu: {
        active: {
          label: "Active Tickets",
          contentPath: "./tickets/active.html"
        },
        completed: {
          label: "Completed",
          contentPath: "./tickets/completed.html"
        },
        create: {
          label: "Create New",
          contentPath: "./tickets/create.html"
        }
      }
    }
  };
  
  export default menuConfig;