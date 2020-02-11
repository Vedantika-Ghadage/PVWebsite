const express=require('express');
const app=express();
const morgan=require('morgan')
const mysql=require('mysql')

const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static('./public'))

app.post('/user_create',(req, res)=>{
    console.log("new user...")
    console.log("name:"+req.body.name)
    var id=req.body.id
    var name=req.body.name
    var emailid=req.body.emailid
    var password=req.body.password

    const queryString="INSERT INTO Demo(id,name,emailid,password) VALUES(?,?,?,?)"
    getConnection().query(queryString,[id,name,emailid,password],(err,results,fields)=>{
        if(err){
            console.log("failed to insert:"+err)
            res.sendStatus(500)
            return
        }

        console.log("inserted succsesfully")
        res.end()
    })
    res.end()

})

function getConnection(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'Mydatabase'
    })
}

app.use(morgan('short'))

app.get("/user/:id",(req,res)=>{
    console.log("Fetching user with id:"+req.params.id)

    const connection = getConnection()

    connection.query("SELECT emailid,password FROM Demo",(err,rows,fields)=>{
        console.log("fetch all data succesfully")
        res.json(rows)
    })

    //res.end()
})


app.get("/",(req,res)=>{
    console.log("responce");
    res.send("hello from responce");
})


app.get("/users",(req,res)=>{
    var user1={name:"admin",emailid:"admin@gmail.com",password:"password"}
    res.json(user1) 
    //res.send("nodemon ressponse..");
})

app.listen(3004,()=>{
    console.log("server is running on 3004");
})  
