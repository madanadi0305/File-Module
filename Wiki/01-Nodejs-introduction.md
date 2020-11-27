# Introduction

Node.js is a server-side framework that is used to execute Javascript code outside of a browser. 
Being the only way to execute backend Javascript,
 Node.js is most popular and in-demand framework among tech companies while hiring talent 

## Why NodeJS is used?
* It can interact between Client and server to store and update content to create dynamic web pages
* It can create, open, read, write, delete and close files on the
server
* It can collect user data through HTML forms
* It can add, delete and modify data in your database

## Why is NodeJS popular?

  #### Blocking vs Non-blocking I/O: 
I/O in the computing world means Input/Output communication between Client and Server. 
In client-server applications, when a client (browser) makes a request to a server, 
the server processes the request and sends back a response to the client. 
When a connection is made between the client and the server, 
they both can read and write the data which is bound to that connection. Each client-server
the connection is handled and managed by a thread from the computer processor.

There are 2 types of I/O 

Blocking I/O: 

When a client makes a request to connect with the server,
the thread that handles that connection is blocked until the operation 
is complete and the response is sent to the client.
If the operation is incomplete, then the thread can do nothing else but wait. 
Now to fulfill multiple requests occurring at the same time, we need to have multiple threads,
that means we need to allocate a new thread for each client-server connection.

There are some problems with this approach:

- With the increasing number of connections, creating multiple threads and switching between them will 
become difficult and inefficient.
- At any given time, there are multiple threads just waiting for the client requests
 resulting in wastage of resources.

Hence, blocking I/O approach is not good if you have to serve responses 
to a large number of clients at the same time.



Non Blocking I/O:

In the world of Javascript, functions are First-class citizens, it means that they can be passed as parameters.
So basically, you can check for events (User Interactions) and pass a function to handle that event. 
This function which is used to handle the events is called the callback function.
 In NodeJS, all the I/O operations are stored and 
an Event Loop is initialized which handles the I/O operations through callback functions to complete their execution.
This way, we can use a single thread to handle multiple simultaneous connections.
