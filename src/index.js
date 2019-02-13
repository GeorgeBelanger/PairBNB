// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import registerServiceWorker from './registerServiceWorker'

import serverless from "serverless-http";
import express from "express";

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

export const handler = serverless(app);


// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
