# react-simplest-sidenav

This is the simplest side nav example with not much functionality using ES5 and react, react-dom.


## Run 

after you clone the project and double click the index.html you will face the issue described below.

browser.min.js:3 XMLHttpRequest cannot load file:///Users/xyz/Desktop/react-simplest-sidenav/src/sidenav.js. 
Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.


## Install

to solve this you need to use any http server of your choice. Explanation in the link
http://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local

I am using http-server. You can either use node or python server etc.

npm install -g http-server

run this "http-server" inside the project directory where the index.html exists
This will start serving the pages for Chrome at http 
now you can access the same project at

http://localhost:8080/index.html
and Boom !! here you go.

