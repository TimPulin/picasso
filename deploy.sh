#!/bin/bash
rm dist -r -f
npm run build
cd dist
git init
git remote add picasso git@github.com:TimPulin/picasso.git
git checkout -b production
git add .
git commit -m 'production'
git push picasso HEAD -f