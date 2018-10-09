let express = require('express');
let todoController = require('./controller/todoController');

let app = express();

//template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

app.listen(8888);
console.log('Server is runnig');