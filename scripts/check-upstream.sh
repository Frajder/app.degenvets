#!/bin/bash
set -e

# Check if upstream remote exists
if ! git remote | grep -q '^upstream$'; then
    echo "No upstream remote found. Add it with:"
    echo "git remote add upstream git@github.com:degenvets/dv_blockchain.git"
    exit 1
fi

# Fetch upstream
git fetch upstream

# Count new commits
UPSTREAM_CHANGES=$(git rev-list HEAD..upstream/main --count)
if [ $UPSTREAM_CHANGES -gt 0 ]; then
    echo "⚠️ $UPSTREAM_CHANGES new commits in upstream"
    echo "Changes:"
    git log HEAD..upstream/main --oneline
    exit 1
else
    echo "✅ Up to date with upstream"
fi 