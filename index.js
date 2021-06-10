


const express = require('express');
const app = express();
const server = require('http').createServer(app);
const body = require('body-parser');
var methodOverride = require("method-override")



app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static('publik'));
app.use(body.urlencoded({extended:false}));
app.use(body.json())
app.use(methodOverride("_method"))


const Router = require("./routes/Router");
app.use("/",Router);

const routerApi = require("./routes/routerApi");
app.use("/api",routerApi);



server.listen(3010,function(){
	console.log("server listening port 3010");
});
