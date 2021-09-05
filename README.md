# hello-heroku-Noah

## About
This is a Node.js app that can serve a web page. Currently, it serves a simple page with a message on the main page, and this file on the 'about' page.
Also, it is currently live using Heroku, which can be found [here](https://hello-heroku-noahc.herokuapp.com/).

## How to add a web page to this app
A web page can be easily added to this app.
- First, download the code, unzip it, and open ``index.js`` in your text/code editor of choice.
- Take a look at lines 10-14:
```javascript
app.get('/about', function (req, res) {

    res.sendFile('/README.md', { root: __dirname });

});
```
1. Put your web page file (which is probably an html file) in the root directory, which is the same one as ``index.js`` and ``README.md``.
2. In ``index.js``, copy the above lines of code and paste it below that set of code.
3. Replace `/README.md` with the file name of your web page, following the same syntax.
4. Replace `/about` with whatever you want the web page to be called (e.g. `/my-web-page`).
