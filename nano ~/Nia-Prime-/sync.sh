#!/data/data/com.termux/files/usr/bin/bash

echo "Pulling latest changes..."
git pull --quiet

# Detect changes
if git diff --quiet && git diff --cached --quiet; then
    echo "No changes to sync."
    exit 0
fi

echo "Adding changes..."
git add .

echo "Committing..."
git commit -m "Sync: $(date '+%Y-%m-%d %H:%M:%S')" --quiet

echo "Pushing..."
git push --quiet

echo "Sync complete."
