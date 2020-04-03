

 /**
  * Starting point Form Validation 
  */
 function validation ()
 {
     
     var firstname = document.getElementById("firstname").value.trim();
     var lastname = document.getElementById("lastname").value.trim();
     var email = document.getElementById("email").value;
     var password1 = document.getElementById("password1").value;
     var password2 = document.getElementById("password2").value;
     var mobile = document.getElementById("mobile").value;
     
     if(firstname.length==0)
     {
         
         swal({
             title: "Enter Firstname ",
             text: "Firstname should contain only Alphabets without any spaces ",
             
           });
           return false;
     }
     else 
     {
 
         for(var i =0;i<firstname.length;i++)
         {
             if((firstname[i]>="a" && firstname[i]<="z") || (firstname[i]>="A" && firstname[i]<="Z") )
             {
 
             }
             else
             {
                 swal({
                     title: "Firstname isn't Valid!",
                     text: "Firstname should contain only Alphabets without any spaces ",
                     
                   });
                   return false;
             }
         }
 
     }
      
     if(lastname.length==0)
     {
         
         swal({
             title: "Enter Lastname ",
             text: "Lastname should contain only Alphabets without any spaces ",
             
           });
           return false;
     }
     else 
     {
 
         for(var i =0;i<lastname.length;i++)
         {
             if((lastname[i]>="a" && lastname[i]<="z") || (lastname[i]>="A" && lastname[i]<="Z") )
             {
 
             }
             else
             {
                 swal({
                     title: "Lastname isn't Valid !",
                     text: "Lastname should contain only Alphabets without any spaces ",
                   });
                   return false;
             }
         }
 
     }
    
     if(email.length==0)
     {
         swal({
             title: "Please enter your Email",
             text: 'E-mail should be of the form "name@xy.com" ',
             
           });
           return false;
     }
     if(email.search("@")==-1 || email.search(".com")==-1)
     {
         swal({
             title: "E-mail isn't Valid !",
             text: 'E-mail should be of the form "name@xy.com" ',
             
           });
           return false;
     }
     

      if(password1.length==0)
      {
        swal({
            title: "Please enter Password",
            text: "Password must have a minimum length of 8 and must contain a Special char and a Digit",
            
          });
          return false;
      }

     if(password1.length<8 || numeric_checker(password1) || special_checker(password1)  )
     {
         swal({
             title: "Password isn't Valid !",
             text: "Password must have a minimum length of 8 and must contain a Special char and a Digit",
             
           });
           return false;
 
     }
 
     if(password1!=password2)
     {
         swal({
             title: "OOPs !! Password didn't Match ",
             text: "match it properly",
             
           });
           return false;
 
 
     }
     

     if(mobile.length==0)
     {
        swal({
            title: "Please enter your Mobile number",
            text: "Mobile No. must be a numerical 10 digit Number starting with 9/8/7/6",
            
          });
          return false;
     }

    if(mobile.length!=10 || !(numeric_checker2(mobile))|| (mobile[0]!=9 && mobile[0]!=8 && mobile[0]!=7 && mobile[0]!=6))
    {
     swal({
         title: "Mobile No. isn't Valid !!",
         text: "Mobile No. must be a numerical 10 digit Number starting with 9/8/7/6",
         
       });
       return false;
    }
    
    if(!(x && y))
    {
     swal({
         title: "Please select any Gender",
         text: "",
         
       });
       return false;
    }
    
     return true;
     
 }
 
 
 /**
  * This function returns False
  * if the Argument contains any 
  * numeric digit else it returns
  * True
  */
 function numeric_checker( temp)
 {
     for(var i=0;i<temp.length;i++)
     {
         if(temp[i]>="0" && temp[i]<="9")
         {
             return false;
         }
     }
      
     return true;
 }
 
 /**
  * This function returns False
  * if the Argument contains any 
  * special char else it returns
  * True
  */
 function special_checker( temp)
 {
     for(var i=0;i<temp.length;i++)
     {
         if((temp[i]>="!" && temp[i]<="/") || (temp[i]>=":" && temp[i]<="@"))
         {
             return false;
         }
     }
 
     return true;
 }
 
 /**
  * This function returns True if the 
  *  Argument does not represents
  * a no. 
  */
 function numeric_checker2( temp)
 {
     for(var i=0;i<temp.length;i++)
     {
         if(temp[i]>="0" && temp[i]<="9")
         {
             
         }
         else
         {
             return false;
 
         }
     }
      
     return true;
 }