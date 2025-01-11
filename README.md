# DegenVets Development Environment

A development environment for [DegenVets](https://github.com/degenvets/dv_blockchain) blockchain integration.

## Prerequisites
- Docker
- Docker Compose
- Node.js ≥ 20.0.0
- npm ≥ 9.0.0

## Quick Start
```bash
# Clone the repository with submodules
git clone --recursive git@github.com:Frajder/app.degenvets.git
cd app.degenvets

# Add upstream remote (optional)
git remote add upstream git@github.com:degenvets/dv_blockchain.git

# Copy environment file
cp .env.example .env

# Build and start Docker containers
docker-compose up --build
```

Access the application at http://localhost:3000

## Development
### Docker Commands
```bash
# Start the environment
docker-compose up

# Rebuild containers
docker-compose up --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f
```

### Updating from Upstream
```bash
# Fetch upstream changes
git fetch upstream
git checkout main
git merge upstream/main

# Update submodules
git submodule update --init --recursive
```

### Known Issues
- Phantom Wallet connection errors in development environment
- Content script connection issues with browser extensions

## Testing
```bash
# Run security audit
npm run security

# Check dependencies
npm run outdated
``` 

## Security Scanning

The project uses multiple security scanning tools:
- `npm audit` for dependency vulnerabilities
- Snyk for deeper security analysis (optional)

To enable Snyk scanning:
1. Sign up at [snyk.io](https://snyk.io/) (free tier available)
2. Get your API token
3. Add SNYK_TOKEN to your repository secrets