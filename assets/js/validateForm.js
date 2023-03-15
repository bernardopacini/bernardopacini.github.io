function validateForm() {
    var Name = document.forms["contact_form"]["Name"].value;
    var Email = document.forms["contact_form"]["Email"].value;
    var Mess = document.forms["contact_form"]["Message"].value;
    var response = grecaptcha.getResponse();
    if (Name == "" || Email == "" || Mess == "" || response.length == 0) {
        alert("Please fill all fields and check the Captcha box");
        return false;
    }
        else {setTimeout(function() { alert('Thank you!'); }, 1);
    }
}
