#!/bin/sh

echo "Pulling latest changes..."
git pull --rebase

echo "Adding changes..."
git add -A

echo "Committing..."
git commit -m "Sync from Termux: $(date)"

echo "Pushing..."
git push

echo "Sync complete."
