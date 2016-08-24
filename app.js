var express = require("express"),
    app = express()
    
app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));

const list = ['first item'];

app.get("/", function(req,res){
  res.render("index");
});

app.get('/api/list', function(req,res){
  res.json(list)
})

app.get('/api/list/:item', function(req,res){
  list.push(req.params.item);
  res.json(list)
})

app.get("*", function(req,res){
  res.render("404");
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});