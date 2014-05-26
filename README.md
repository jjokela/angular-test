#angular-test

This is a simple course management application. User can create new courses, see them as a list, filter them, and view, edit and delete them.

Its purpose is to demonstrate a full-stack, mixed technology web app, which can be hosted for example in Azure.

##Stack

* Angular.js
* Jade
* Node.js
* Asp.Net Web API 2
* Asp.Net MVC 5
* Entity Framework 6
* SQL Server

##Client

This is a project done mostly in Visual Studio. Client-side is done using almost completelly with Angular. Only index page uses Asp.Net MVC. Html files are generated using Jade preprocessor, and application's css is done with Sass. Client uses Bootstrap 3 and a custom theme. 

##Server

Server side is done with Asp.Net Web API 2 and MVC 5. MVC handles css and javascript files bundling and minification and serves the index page. Web API is is used for CRUD operations. Data persists in SQL Server, and it is accessed with Entity Framework 6.

##Tests

Client-side tests are done with Karma and Jasmin. Actually project has a Tests
folder that has a includes node modules for client-side testing. (Testing and test scripts were done witn WebStorm since it's a hassle to make it work in Visual Studio.)