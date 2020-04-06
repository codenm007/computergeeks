var email=document.getElementById("email");
var characters = document.getElementById("email").value;
var submitbtn=document.getElementById("validate-form");
submitbtn.addEventListener('click',()=>{

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty";
            return false;
        }
         else if(!re.test(email.value)){
            document.querySelector('.emailcheck').innerHTML = "Email address should contain @ with . domain !";
            email.classList.add("is-invalid");
            return false;
        }
        else 
        {   
            document.querySelector('.emailcheck').innerHTML = " ";
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        });
   