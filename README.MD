# Micro Fronends with module federation

This is a module federation plugin test 
for webpack 5

Micro frontends? look this images 

## Frontends monolíticos 

<img src="readme-assets/image1.png" width="640"/>

## Vert organization (team developments)

<img src="readme-assets/image2.png" width="640"/>




little explanation:

in this case roll up 2 frontend servers

one for main site & other for a web component
both based on reactjs + typescript + tailwindcss 

on main project connect to remote 'header' component

exposed by second project (./header/) config on webpack.config.js


how to test:

open a terminal on test-mf-app folder:

cd header
yarn
yarn start

now remote component is running on localhost:8090

open a terminal on test-mf-app folder:

yarn
yarn start
now main site is working on localhost:8080

go to header/Header.tsx
and change any
save

refresh main site working on localhost:8080
and look it changes

amazing huh



