function validateForm() {
    var name =  document.getElementById('name');
    if (name.value == "") {
       document.querySelector('.namecheck').innerHTML = "Name cannot be empty!";
       name.classList.add("is-invalid");
        return false;
    }
    else{
        document.querySelector('.namecheck').innerHTML = "";
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
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
    var subject =  document.getElementById('subject');
    if (subject.value == "") {
        document.querySelector('.subcheck').innerHTML = "Subject cannot be empty!";
        subject.classList.add("is-invalid");
        return false;
    }
    else{
        document.querySelector('.subcheck').innerHTML = "";
        subject.classList.remove("is-invalid");
        subject.classList.add("is-valid");
    }

    var message =  document.getElementById('message');
    if (message.value == "") {
        document.querySelector('.msgcheck').innerHTML = "Message cannot be empty!";
        message.classList.add("is-invalid");
        return false;
    }
    else{
        document.querySelector('.msgcheck').innerHTML = "";
        message.classList.remove("is-invalid");
        message.classList.add("is-valid");
    }
    var status = document.querySelector('.status');
    document.querySelector('.status').innerHTML = "Sending your mail...Expect a feedback within 7 working days !!";
    status.classList.remove("d-none");
    setTimeout(function(){
        document.querySelector('.status').innerHTML = "";
        status.classList.add("d-none");
      }, 5000);
  }
