#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

corepack pnpm run build

DEPLOY_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "$DEPLOY_DIR"
}
trap cleanup EXIT

cp -R dist/. "$DEPLOY_DIR"/

GIT_NAME="$(git config user.name || printf '%s' 'Jinghao Zhang')"
GIT_EMAIL="$(git config user.email || printf '%s' '213896194+Jinghao67@users.noreply.github.com')"
REMOTE_URL="$(git remote get-url origin)"

git -C "$DEPLOY_DIR" init -q
git -C "$DEPLOY_DIR" checkout -b gh-pages
git -C "$DEPLOY_DIR" config user.name "$GIT_NAME"
git -C "$DEPLOY_DIR" config user.email "$GIT_EMAIL"
git -C "$DEPLOY_DIR" add -A
git -C "$DEPLOY_DIR" commit -m "Deploy site"
git -C "$DEPLOY_DIR" remote add origin "$REMOTE_URL"
git -C "$DEPLOY_DIR" push -f origin gh-pages
