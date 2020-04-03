

var input = document.getElementById("searchinput");
input.textContent="";
input.addEventListener("keyup", search);

var login = document.getElementById("login");
login.addEventListener("click", loginpage);


var genre = document.getElementById("genre");
genre.addEventListener("click",remove);

var genrename = document.getElementById("genrename");
genrename.textContent="";
genrename.addEventListener("keyup", genresearch);

var menu =document.getElementById("menu");
menu.addEventListener("click",toggle);

var leftsidebar = document.getElementById("leftsidebar");
var text = document.querySelectorAll("#text");
var rightsidebar = document.getElementById("rightsidebar");


function toggle()
{
     leftsidebar.classList.toggle("leftsidebar");
     leftsidebar.classList.toggle("leftsidebar1");

     for(var i=0;i<text.length;i++)
     {
        text[i].classList.toggle("text");
        text[i].classList.toggle("text1");
     }
     
     rightsidebar.classList.toggle("rightsidebar");
     rightsidebar.classList.toggle("rightsidebar1");

}

function search()
{
    var searchinput = document.getElementById("searchinput").value;
    window.location.href="https://c123movies.org/search/"+searchinput;
}

function loginpage()
{
    window.location.href="extra.html";
}

function remove()
{
    genrename.classList.toggle("displaynone");
}

function genresearch()
{
    
    window.location.href="https://c123movies.org/genre/"+genrename.value;
}