
function checklogin()
{
    var emailid=documnet.getelementbyID("email").value;
    var passwd=documnet.getelementbyID("password").value;
}
if (emailid=="admin" && passwd=="admin123")
{
    alert("Login Successfull!!");
    window.location="Homepage.html";
    return false;
}
else{
    alert("Incorret EmailID");

}