npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://__GITHUB_TOKEN__.github.com/luciaellan-cookapps/blog_dist.git master
 