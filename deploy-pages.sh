#!/usr/bin/env bash
set -e

echo "=== Building static export for GitHub Pages ==="
npm run build

echo "=== Initializing clean git deployment inside out/ ==="
cd out
git init -b main
git add -A
git commit -m "Deploy: ARUN Architects website with interactive 3D letters and scattered preloader"

echo ""
echo "✅ Export complete! To push to your GitHub Pages repository, run:"
echo "   cd out"
echo "   git remote add origin https://github.com/Ash19820/<YOUR_REPO_NAME>.git"
echo "   git push -u -f origin main"
