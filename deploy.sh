#!/bin/bash
rm dist -r -f
echo 'папка dist удалена'
echo 'запускаю сборку'
npm run build
cd dist
git init
git remote add picasso git@github.com:TimPulin/picasso.git
git checkout -b production
git add .
git commit -m 'production'
echo 'коммит сделан'
git push picasso HEAD -f
echo 'коммит отправлен на удаленный репозиторий'
