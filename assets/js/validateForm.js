function validateForm() {
    var Name = document.contact-form.name;
    var Email = document.contact-form.email;
    var Org = document.contact-form.organization;
    var Mess = document.contact-form.message;
    
    var response = grecaptcha.getResponse();
    if (Name == "" || Email == "" || Mess == "" || Org == "" || response.length == 0) {
        alert("Please fill all fields and check the Captcha box");
        return false;
    }
        else {setTimeout(function() { alert('Thank you!'); }, 1);
    }
}
