# Nodejs Express Minimal Boilerplate

Primarily made to save the time I spend getting everything in shape before writing the actual project code. This boilerplate is as minimal as it gets.

### Prerequisites
```
Nodejs
```

### Installation
```
$ git clone -b master --single-branch https://github.com/abhn/Nodejs-Express-Minimal-Boilerplate
$ cd Nodejs-Express-Minimal-Boilerplate/
$ npm install
$ npm start
```
Optionally, for automatic reload on file change
```
# npm install -g supervisor
$ supervisor index.js
```

### Structure
- `/public` holds all static files
  - `/public/css` common css
  - `/public/js` common js
- `/views` holds handlebar views
  - `/views/layouts` common layouts
- `/index.js` entry file
