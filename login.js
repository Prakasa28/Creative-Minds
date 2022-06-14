function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin"&& password=="user")
    {
        alert("You have succesfully logged in!");
        window.open("index.html"); 
    }
    else
    {
        alert("Login failed, try again!");
        window.open("login.html");
    }
}