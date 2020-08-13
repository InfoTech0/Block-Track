if("Email" in localStorage){
  document.getElementById('login').innerHTML="LogOut";
}
function RemoveEmail(){
  localStorage.removeItem('Email');
  location.href="login/login.html";
}
function Project(){
if (!("Email" in localStorage)){
  location.href="login/login.html";
}
else{
  location.href="causes.html";
}
}
function Money(){
if (!("Email" in localStorage)){
  location.href="login/login.html";
}
else{
  location.href="landing-page-send.html";
}
}
function Transaction(){
if (!("Email" in localStorage)){
  location.href="login/login.html";
}
else{
  location.href="NETELLER » History.html";
}
}
function Events(){
if (!("Email" in localStorage)){
  location.href="login/login.html";
}
else{
  location.href="events.html";
}
}
