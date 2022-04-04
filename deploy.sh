#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>


#your_token: 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
#git remote set-url origin https://<your_token>@github.com/<USERNAME>/<REPO>.git
#赋权限
#https://github.com/wusheng0109/ws-ui.github.io.git
#git remote add origin https://github.com/wusheng0109/ws-ui.github.io.git
#git remote set-url origin https://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@github.com/wusheng0109/ws-ui.github.io.git
git push -f https://github.com/wusheng0109/ws-ui.github.io.git master:gh-pages

cd -
