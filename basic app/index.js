let express = require( 'express' )
let app = express()
app.use( express.static( 'public' ) );

app.get('/form', function(req,res){
	res.sendFile( __dirname +'/'+ 'form.html')
})

app.get( '/get',function(req,res){
	res.send('<h4> UserName: '+req.query['name']+ '</h4><h4> E-mail: '+req.query['email']+ '</h4><h4> Your Age :'+req.query['age']+ '</h4><h4> birth date: '+req.query['b_date']+ '</h4><h4> current role: '+req.query['job']+ '</h4><h4> gender:'+req.query['gender']+ '</h4><h4>Your hobiess are: '+req.query['hobbie']+ '</h4><h4>YOU commented that: '+req.query['coment']+"</h4>")
})

let server = app.listen( 8888, function(){
	console.log( 'server is connected...' )
})