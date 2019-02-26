var data = {
  "ivan" : "1234",
  "dima" : "7777",
  "petr" : "Test123"
};


var login = prompt("Login:","");

  if (String(login) in data)
  {
    var password = prompt("Password","****");
    if (password == data[login])
        alert("Welcome " + login);
    else alert("Wrong password, try again lol");
   }
   else alert("Wrong login try again lul");

