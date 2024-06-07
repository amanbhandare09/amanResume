function formValidator(){

    var name=document.getElementById('name');
    var age=document.getElementById('number');
    var phone=document.getElementById('email');

    if(notEmpty(name,'Cannot Submit Null')){
        if(isAlphabet(name,"Only alphabets Allowed for Name ")){
            if(isNumeric(number,'Phone has to be numeric!')){
                if(emailValidator(email, 'Please Enter Proper emailId')){
                    if(lengthReg(number,10,10)){
                        sendMail();
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function notEmpty(ele,helperMsg){
    if(ele.value.length==0){
        alert(helperMsg);
        ele.focus();
        return false;
    }
    return true;
}
function isAlphabet(ele,helperMsg){
    var alphaExp = /^[a-zA-Z\s]+$/;
    if(ele.value.match(alphaExp))
    {   return true; }
    else{
        alert(helperMsg);
        ele.focus();
        return false;
    }
}
function isNumeric(ele, helperMsg) {
    var numericExpression = /^[0-9]+$/;
    if (ele.value.match(numericExpression)) {
        return true;
    } else {
        alert(helperMsg);
        ele.focus();
        return false;
    }
}
function emailValidator(ele, helperMsg) {
    var emailExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (ele.value.match(emailExpression)) {
        return true;
    } else {
        alert(helperMsg);
        ele.focus();
        return false;
    }
}
function lengthReg(ele, minLength, maxLength) {
    if (ele.value.length < minLength || ele.value.length > maxLength) {
        alert(" Phone Number should be only " + minLength + " Digits long ");
        ele.focus();
        return false;
    }
    return true;
}

// CONTACT TO EMAIL
function sendMail(){

    let parameters = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        countryCode : document.getElementById("countryCode").value,
        number : document.getElementById("number").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_udqrwpe","template_7c210eb",parameters).then(alert("Thank You for Contacting! I'll get back to you soon!"))
}
//FOR RESPONSIVE HEADER
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('header ul');
  
    menuToggle.addEventListener('click', function () {
      menuItems.classList.toggle('active');
    });
  });

//sticky header  
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })