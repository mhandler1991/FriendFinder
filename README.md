# Friend Finder

Node.js & Express Server

Friend Finder is a Node.js/Express Server connected which allows users to complete a survey of ten questions and be prompted a response of their most suitable match/friend within the Friend Finder system.



[TOC]

## Files Included:

1. **friends.js**: The systems included 'friends' data object referenced throughout.
2. **home.html**: HTML Home page. 
3. **survey.html**: HTML Survey page used to grab user input and submit to the server
4. **apiRoutes.js**: Javascript Page used to route API Requests
5. **htmlRoutes.js**: Javascript Page used to route HTML requests
6. **server.js**: Node.js Express Server



## File Structure:

```
├── data
│   ├── friends.js
├── public
│   ├── home.html
│   ├── survey.html
├── routing
│   ├── apiRoutes.js
│   ├── htmlRoutes.js
├── .gitignore
├── README.md
├── server.js
```



#### Friends Data Model

| name   | photo | scores                |
| ------ | ----- | --------------------- |
| Jan M. | URL   | [5,4,3,2,1,0,4,3,2,4] |

```javascript
    {
        name: 'Jan M.',
        photo: 'https:...',
        scores: [5,5,5,5,5,5,5,5,5,5]
    }
```



## Instructions: 

Please follow the provided instructions to create/deploy Friend Finder:

1. Clone the repository from Github: https://github.com/mhandler1991/FriendFinder

2. Install Express Dependency

   ```javascript
   npm i express
   ```

3. Run your Node Server.js file

   ```javascript
   node server.js
   ```

4. Open your browser on the defined port (PORT 3000 is the default port included) and find your friend!



#### What did we use?

- Node.js
- Express



#### Packages Used:

- [Express](https://www.npmjs.com/package/express)



## General Functionality

Friend Finder is a Node.js/Express Server connected which allows users to complete a survey of ten questions and be prompted a response of their most suitable match/friend within the Friend Finder system.



#### Contributors: 

[Maxwell Handler](http://maxwellhandler.com/)



## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.