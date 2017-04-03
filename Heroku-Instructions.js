connect ur heroku as a remote

## In package.json, change:
{
"heroku-prebuild": "bash ./scripts/deployment_react.sh",
"heroku-postbuild": "bash ./scripts/deployment_cleanup.sh",
}
{
	move dotenv out of devdependency to dependency
}
	
## in deployment_cleanup.sh {
rm -rf db src scripts webpack.config.js .babelrc .gitignore README.md
}

## in server.js {
remove dotenv line. 
}

in heroku {
	add in config variables under heroku app settings:
	NODE_ENV=production
}

also dont forget to do this inside of ur app folder{
	cat db/schema.sql | heroku pg:psql
	cat db/seed.sql | heroku pg:psql
}