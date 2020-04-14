# FS Module

The File System (fs) module was introduced to you in ES6 Module. This module allows you to interact with the files stored in your system.

To use this module we have to import the fs module, refer the below code :

```js
const fs = require("fs");
```

All file system operations have synchronous and asynchronous forms. The asynchronous form always takes a completion callback as its last argument. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception/ error. If the operation was completed successfully, then the first argument will be null or undefined. Let us understand this with an example

```js
// just an example to read a file.
// importing fs module
const fs = require("fs");

// using readFile() of fs module to fetch data from the path mentioned as a parameter.

fs.readFile(PathToFile, (error, data) => {
  // inside callback
  // checking whether any error occured or not while fetching data
  if (error) {
    // if error occured
    throw error; // throw that error
  } else {
    // if error not occured
    console.log(data); // just print the data fetched from the file.
  }
});
```

### Explanation of above code :

`readFile()` is an asynchronous method to read a file. It takes two parameters, first one is _PathToFile_ that provides the full path of the file along with filename and the second parameter is a `callback` function. We will discuss `readFile()` in-depth in later articles.

In this example, we are fetching the data from the file using the `readFile()` method of _`fs`_ module.

In the above code, first, we import the `fs` module and then we have used asynchronous readFile method to read the content of the file. As it is an asynchronous method of the `fs` module, thus it will have a callback function as a parameter.

The callback function will take two parameters, the first parameter is always reserved for an exception/ error. So here also we have used _error_ that will store that exception.
The second parameter depends upon the method used. In this case, the second parameter is data fetched, thus _data_ is used as the second parameter which will store the content fetched from the file.

Now, we have checked if any error occurred or not, if the error occurs then the statement inside `if` block will be executed i.e. it will throw that error.
if no error occurs then `else` block gets executed i.e it will print the data fetched using _`console.log`_ function and _data_ variable.