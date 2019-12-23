# string-counter-express[![Build Status](https://travis-ci.org/dopecodez/ttt-string-count-backend.svg?branch=master)](https://travis-ci.org/dopecodez/ttt-string-count-backend)

A string recurrence counter made with ExpressJS. Will get the N number of strings and their occurences. Also has unit tests on top of this with Mocha and Chai.

If you have any doubts or clarifications on this code, hit me up and I'll try to help you guys out!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You'll need to install NodeJS for running this application. I'm on Node v10.5.3, you can find it at:
```
https://nodejs.org/en/download/
```
You'll also need a code editor to see how the code goes. Use whichever editor which has JS support, I use Visual Studio Code on 
Windows 10.

### Installing

Simple steps to get the application running. Open the terminal to the folder containing string-counter-express and just type:
```
npm install
```
This should install all the dependencies within package.json and create your package-lock.json and node modules.

After the previous command completes successfully, open the terminal and type:
```
npm start
```
This should get the program up and running on the default port.

To run the tests, all you need to do is, type:

```
npm test
```

## Usage

Once program is up and running, you can call the endpoint with server_ip/count. By default, the port should be 3004. On your local machine, server_ip would be http://localhost:3004 (if you haven't specified any port). This is a get request which expects two params : url and number as such:
```
{
  http://localhost:3004/count?url=https://terriblytinytales.com/test.txt&count=25
}
```
I also hosted the same app on heroku. So you guys can run the api by calling a get request to https://stormy-springs-25121.herokuapp.com/count?url=https://terriblytinytales.com/test.txt&count=25 and see the magic happen.

## Built With

* [NodeJS](https://nodejs.org/en/) - The language used
* [Express](https://expressjs.com/) - Framework used on top of node.
* [Mocha](https://mochajs.org/) - Test framework for JS.
* [Chai](https://www.chaijs.com/) - Assertion library for JS.
* [async-request](https://www.npmjs.com/package/async-request) - async-request is a wrapper for request that uses ES7 async functions.

## Contributing

Anybody with ideas to genuinely improve the project are welcome. We use git flow, so just pull the repo, cut a branch on develop and put a pull request back to us. We will look through the PR as soon as possible. We suggest you make sure your PR passes all unit tests, and add further unit tests for any new functionalities introduced.

## Versioning
Currently, no versions are available. Will update soon

## Authors

* **Govind S** - *Initial work* - [dopecodez](https://github.com/dopecodez)

## License

This project is free. Use it in whichever way you please.

## Acknowledgments

* Hat tip to anyone whose code was used
