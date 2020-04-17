


if(window.innerWidth>813)
{
    $("#icon").on("click",searchbyicon);
}
else if(window.innerWidth<=813)
{
   $("#icon").on("click",function(){
      $("#navbar").toggleClass("navbar navbar1");
      $("#icon").toggleClass("searchicon searchicon1");
      $("#apps").toggleClass("apps apps1");
      $("#body").toggleClass("body body1");
      $("#animsearch").toggleClass("animsearch animsearch1");
      
      $("#animsearch").show(1000,function()
      {
        $("#body").on("click",function(){

            $("#navbar").toggleClass("navbar navbar1");
            $("#icon").toggleClass("searchicon searchicon1");
            $("#apps").toggleClass("apps apps1");
            $("#animsearch").toggleClass("animsearch animsearch1");
            $("#body").toggleClass("body body1");
            $("#body").off();
    
          })

      })
      
      
      
      
    }
   )
}


var login = document.getElementById("login");
login.addEventListener("click", loginpage);


var genre = document.getElementById("genre");
genre.addEventListener("click",remove);

var genrename = document.getElementById("genrename");
genrename.textContent="";
genrename.addEventListener("keyup", genresearch);

$("#menu").on("click",toggle);

var input = document.getElementById("searchinput");
input.textContent="";
input.addEventListener("keyup", search);

var input1 = document.getElementById("searchanim");
input1.textContent="";
input1.addEventListener("keyup", search);


function toggle()
{
    //console.log("its working");
    if(window.innerWidth>813)
    {

     $("#leftsidebar").hide(120 ,function(){
         
        $("#leftsidebar").toggleClass("leftsidebar leftsidebar1");
        $("#leftsidebar").show(120);
    });

     }
     else
     {

        if($("#leftsidebar").css("display")=="none")
        {
            $("#leftsidebar").toggleClass("leftsidebar leftsidebar1");
            $("#leftsidebar").show(120);
        }
        else{
            
            $("#leftsidebar").hide(120); 
            $("#leftsidebar").toggleClass("leftsidebar leftsidebar1");
        }
        
        
        
     }
       
       
     
     
     var a = $(".text");
     if(a.length!=0)
     {
        $(".text").toggleClass("text text1");
     }
     else{
        $(".text1").toggleClass("text text1");
     }
     

     $("#rightsidebar").toggleClass("rightsidebar rightsidebar1");
     

}

function search(event)
{
    if(event.which===13)
    {
    var searchinput = this.value;
    window.location.href="https://c123movies.org/search/"+searchinput;
    }
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

function searchbyicon()
{
    var searchinput = document.getElementById("searchinput").value;
    window.location.href="https://c123movies.org/search/"+searchinput;
}