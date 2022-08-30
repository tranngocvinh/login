const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")) ;
app.get('/', function(req, res)  {
    res.sendFile(__dirname + "/signup.html") ;


});

app.post('/', function(req, res) {
    var firstName = req.body.fn ;
    var lastName = req.body.ln ;
    var email = req.body.em ;

    res.send(firstName + ' ' + lastName + ' ' + email) ;
})


app.listen(3000,function(){
    console.log("server is running on port 3000")
})