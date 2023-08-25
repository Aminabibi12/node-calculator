const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to node calculator')
});

// To add two values.
app.get("/add", function (request, response) {
   let value1 = Number.parseInt(request.query.value1);
   let value2 = Number.parseInt(request.query.value2);
   response.send(`${value1} + ${value2} = ${value1 + value2}`)
});

//To subtsract two values.
app.get("/substract", function (request, response) {
    let value1 = Number.parseInt(request.query.value1);
    let value2 = Number.parseInt(request.query.value2);
    response.send(`${value1} - ${value2} = ${value1 - value2}`)
 });

 //To multiply two values.
app.get("/multiply", function (request, response) {
    let value1 = Number.parseInt(request.query.value1);
    let value2 = Number.parseInt(request.query.value2);
    response.send(`${value1} * ${value2} = ${value1 * value2}`)
 });
 
 //To divide two values.
app.get("/divide", function (request, response) {
    let value1 = Number.parseInt(request.query.value1);
    let value2 = Number.parseInt(request.query.value2);
    response.send(`${value1} / ${value2} = ${value1 / value2}`)
 });
 
//the endpoints add/10/2.

app.get("/add/10/2", function (request, response) {
    let sum = 10 + 2;
    response.send("addition of 10 + 2 = "+sum);
});

//the endpoints add/10/2.

app.get("/substract/10/2", function (request, response) {
    let sub = 10 - 2;
    response.send("Sbtraction of 10 - 2 = "+sub);
});

//the endpoints multiply/10/2.

app.get("/multiply/10/2", function (request, response) {
    let mul = 10 * 2;
    response.send("multiplication of 10 * 2 = "+mul);
});

//the endpoints divide/10/2.

app.get("/divide/10/2", function (request, response) {
    let div = 10 / 2;
    response.send("division of 10 / 2 = "+div);
});

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);


app.listen(3000, () => console.log("Server is up and running"))