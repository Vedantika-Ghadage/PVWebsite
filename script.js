
var express =require('express');
var mysql=require('mysql');
var app=express();

//var uname=document.getElementById("name");
//var eid=document.getElementById("eid");
//var password=document.getElementById("pass")

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'Mydatabase'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }else{
        console.log('connected');
    }

});

    app.get('/getdata',function(req,resp){
        connection.query("select * from Registration",function(error,rows,fields){
            if(!!error){
                console.log('Error in query');
                resp.json({"error":true});
            }else{
                console.log('successfull query');
                console.log(rows);
                resp.json(rows); 
            }
        });
    })

    app.get('/setdata',function(req,resp){
        connection.query("insert into Registration values('metapercept','meta@gmail.com','meta1223')",function(error,rows,fields){
            if(!!error){
                console.log('Error in query');
                resp.json({"error":true});
            }else{
                console.log('successfull query');
                console.log(rows);
                resp.json(rows); 
            }
        });
    })

app.listen(1337);
