# Modules in Javascript

Good authors divide their books into chapters and sections; good programmers divide their programs into modules. 
JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.
There are the following types of modules in Node.js:

**Core Modules** – While working with NodeJS, there are some sections of code that have
to be written again and again in every application. Hence, instead of writing the same code repeatedly, developers can
use the core modules (ready to use functions) which come pre-built with NodeJS
These are the ones that come pre-compiled with the Node.js
library. Some common core modules are HTTP, URL, EVENTS,
FILE SYSTEM, etc.


**User-Defined Modules**  – User-defined modules are the ones that a
developer makes for a specific purpose in his/her application. These are required when the core modules are not capable of fulfilling the desired functionality.

**Third Party Modules** - There are some modules which are created by others
but can be used by developers in their own applications.
They can use third party modules using NPM (Node Package Manager).



### A Node.js application involves the following 3 steps :

* Import required modules − We use the 'require' keyword to load the necessary
Node.js modules.
* Create server − Create a server which will interact between the client and database.
* Read request and return response − The server created in an earlier
step will read the HTTP request made by the client (browser) and return the response.

```js
/*server.js*/
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(req, res) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});
server.listen(port, hostname, function() {
console.log('Server running at http://'+ hostname + ':' + port + '/');
});
```


## Access Global Scope

A global scope contains global variables which are visible (hence accessible)
throughout the program, unless shadowed.
In browser, *window* object lies in the global scope. In Node.js, *global* object
represents the global scope.
To add some object/module in the global scope, you need to export it using ```export``` or
```module.export```. The same way you can access modules or objects in modules from the
global scope using ```require()``` function.
For example, to export a module in Node.js, use ```exports.name = module```.

## The node command
When Node.js is installed on a system, it provides a command called a **node**, 
which is used to run JavaScript files. If you have a file hello.js, containing this code:

```js
let message = "Hello world";
console.log(message);
```
You can then run the **node** from the terminal like this to execute the program:

```shell
$ node hello.js
Hello world
```
The console.log method in Node prints out a piece of text in the standard output of the terminal. 
When running **node** from the terminal and file name, you can see the message in the terminal output

If you run a node without giving it a file, it provides you with a prompt at which you can 
type JavaScript code and immediately see the result.

```shell
$ node
> 1 + 1
2
> [-1, -2, -3].map(Math.abs)
[1, 2, 3]
> process.exit(0)
$
```