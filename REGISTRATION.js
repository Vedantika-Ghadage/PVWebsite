var objPeople =[]

function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    for(i=0;i<objPeople.length-1;i++){
       // console.log("hello")
        console.log(objPeople[i])
        if(username == objPeople[i].username && password == objPeople[i].password){
            console.log( username+" is logged in");
            return;
        }
    }
    console.log("Incorrect password")

}

function registerUser(){
    var registerUser=document.getElementById("txtName").value;
    var registerPassword=document.getElementById("txtPas").value;
   // var registrationCpass=document.getElementById("txtCPas").value;
    //var registrationemailid=document.getElementById("txtEmail").value;
    var newUser={
        username:registerUser,
        password:registerPassword
    }

    objPeople.push({username:registerUser,password:registerPassword})
    var no1=objPeople[0].username
    var no2=objPeople[0].password
    console.log(objPeople)
    console.log(no1)

    
}