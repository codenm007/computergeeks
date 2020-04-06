function validateAcc() {
    var fullname=document.getElementById("fullname");
    if (fullname.value == "") {
        document.querySelector('.fullnamecheck').innerHTML = "Enter your name!";
        fullname.classList.add("is-invalid");
         return false;
     }
     else{
         document.querySelector('.fullnamecheck').innerHTML = "";
         fullname.classList.remove("is-invalid");
         fullname.classList.add("is-valid");
     }

     var email =  document.getElementById('email');
     if (email.value == "") {
         document.querySelector('.emailcheck').innerHTML = "Please enter your email!";
         email.classList.add("is-invalid");
         return false;
     } else {
         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(!re.test(email.value)){
             document.querySelector('.emailcheck').innerHTML = "Email must contain characters @ with a .domain name !";
             email.classList.add("is-invalid");
             return false;
         }
         else{
             document.querySelector('.emailcheck').innerHTML = "";
             email.classList.remove("is-invalid");
             email.classList.add("is-valid");
         }
     }

   var phone =  document.getElementById('phone');
     if (phone.value == "") {
         document.querySelector('.phonecheck').innerHTML = "Don't forget your phone number ;)";
         phone.classList.add("is-invalid");
         return false;
     } else {
         var num = /^[0-9]+$/;
         if(!num.test(phone.value)){
             document.querySelector('.phonecheck').innerHTML = "Please enter only Numbers without spaces!";
             phone.classList.add("is-invalid");
             return false;
         }
         else{
             document.querySelector('.phonecheck').innerHTML = "";
             phone.classList.remove("is-invalid");
             phone.classList.add("is-valid");
         }
     }

      var pass =  document.getElementById('pass');
      if (pass.value == "") {
          document.querySelector('.passcheck').innerHTML = "Password cannot be empty!!";
          pass.classList.add("is-invalid");
          return false;
      } else {
          var str = pass.value;  //here in str the password string is stored!
          if (str.match(/[a-z]/g) && str.match( 
            /[A-Z]/g) && str.match( 
            /[0-9]/g) && str.match( 
            /[^a-zA-Z\d]/g) && str.length >= 8) 
        res = "TRUE"; 
    else 
        res = "FALSE"; 
        if(res == "FALSE"){
              document.querySelector('.passcheck').innerHTML = "Password Not matching the above mentioned format!";
              pass.classList.add("is-invalid");
              return false;
          }
          else{
              document.querySelector('.passcheck').innerHTML = "";
              pass.classList.remove("is-invalid");
              pass.classList.add("is-valid");
          }
      }

      var repass =  document.getElementById('repass');
      if (repass.value == "") {
          document.querySelector('.repasscheck').innerHTML = "Re-enter your password!";
          repass.classList.add("is-invalid");
          return false;
      } else {
        if(str != repass.value ){
              document.querySelector('.repasscheck').innerHTML = "Password Not matching !";
              repass.classList.add("is-invalid");
              return false;
          }
          else{
              document.querySelector('.repasscheck').innerHTML = "";
              repass.classList.remove("is-invalid");
              repass.classList.add("is-valid");
          }
      }
 
      var checkbox=document.getElementById("exampleCheck1");
      console.log(checkbox.check);
      if (!checkbox.checked) {
          document.querySelector('.tickbox').innerHTML = "Terms and conditions not accepted !";
          checkbox.classList.add("is-invalid");
           return false;
       }
       else{
           document.querySelector('.tickbox').innerHTML = "";
           checkbox.classList.remove("is-invalid");
           checkbox.classList.add("is-valid");
       }
  

    }