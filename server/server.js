const express = require('express');
const app = express();

const port = 3001;

app.use(
    function(req,res,next) {
        setTimeout(next,1000);
    });

app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(port, function () {
    console.log(`Server started at ${port} port.`);
});