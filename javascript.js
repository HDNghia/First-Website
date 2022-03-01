function send() {
    var yourname = document.getElementById("yourname");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message1");

    function is_email(emai) {
        var x = emai;
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition <= (atposition + 2) || (dotposition + 2) >= x.length) {
            return false;
        } else {
            return true;
        }
    }
    if (yourname.value == "") {
        document.getElementById("name").innerHTML = "Please fill out your name.";
    }
    if (yourname.value.length > 100) {
        document.getElementById("name").innerHTML = "Your name should not exceed 100 characters.";
    }
    if (yourname.value != "" && yourname.value.length <= 100) {
        document.getElementById("name").innerHTML = "";
    }
    if (email.value == "") {
        document.getElementById("mail").innerHTML = "Please fill out your email.";
    }
    if (email.value.length > 100) {
        document.getElementById("mail").innerHTML = "Your email should not exceed 100 characters.";
    }
    if (email.value != "" && email.value.length <= 100) {
        if (is_email(email.value) == false) {
            document.getElementById("mail").innerHTML = "Email không hợp lệ. Mời bạn nhập lại!!!."
        } else {
            document.getElementById("mail").innerHTML = "";
        }
    }
    if (subject.value == "") {
        document.getElementById("sub").innerHTML = "Please fill out the subject.";
    }
    if (subject.value.length < 50 && subject.value.length > 0) {
        document.getElementById("sub").innerHTML = "Subject should not shorter than 50 character.";
    }
    if (subject.value.length > 250) {
        document.getElementById("sub").innerHTML = "Subject should not exceed 250 characters.";
    }
    if (subject.value != "" && subject.value.length >= 50 && subject.value.length <= 250) {
        document.getElementById("sub").innerHTML = "";
    }
    if (message.value == "") {
        document.getElementById("mess").innerHTML = "Please fill out the message.";
    }
    if (message.value != "" && message.value.length <= 500) {
        document.getElementById("mess").innerHTML = "";
    }
    if (message.value.length > 500) {
        document.getElementById("mess").innerHTML = "Message should not exceed 500 characters.";
    }
    if (yourname.value != "" && yourname.value.length <= 100 && email.value != "" && email.value.length <= 100 && is_email(email.value) == true && subject.value != "" && subject.value.length >= 50 && subject.value.length <= 250 && message.value != "" && message.value.length <= 500) {
        alert('Bạn đã gửi thành công');
    }
}

function order() {
    var gym = document.getElementById("select");
    var yourname = document.getElementById("yourname")
    var message = document.getElementById("message2");
    var deliverdate = document.getElementById("deliverdate");
    var deliverto = document.getElementById("deliverto");
    if (gym.value == "select book") {
        document.getElementById("btg").innerHTML = "Please select our product.";
    }
    if (gym.value != "select book") {
        document.getElementById("btg").innerHTML = "";
    }
    if (yourname.value == "") {
        document.getElementById("name").innerHTML = "Please fill out your name.";
    }
    if (yourname.value.length > 100) {
        document.getElementById("name").innerHTML = "Your name should not exceed 100 characters.";
    }
    if (yourname.value != "" && yourname.value.length <= 100) {
        document.getElementById("name").innerHTML = "";
    }
    if (message.value == "") {
        document.getElementById("mess").innerHTML = "Please fill out your message.";
    }
    if (message.value.length > 30) {
        document.getElementById("mess").innerHTML = "Your message should not exceed 30 characters.";
    }
    if (message.value != "" && message.value.length <= 30) {
        document.getElementById("mess").innerHTML = "";
    }
    if (deliverdate.value == "") {
        document.getElementById("date").innerHTML = "Please fill out the deliver date.";
    }
    if (deliverdate.value != "") {
        document.getElementById("date").innerHTML = "";
    }
    if (deliverto.value == "") {
        document.getElementById("delivert").innerHTML = "Please fill out the address.";
    }
    if (deliverto.value != "" && message.value.length <= 500) {
        document.getElementById("delivert").innerHTML = "";
    }
    if (deliverto.value.length > 500) {
        document.getElementById("delivert").innerHTML = "Address should not exceed 500 characters.";
    }
    if (gym.value != "select book" && yourname.value != "" && yourname.value.length <= 100 && message.value != "" && message.value.length <= 30 && deliverdate.value != "" && deliverto.value != "" && message.value.length <= 500) {
        alert('Bạn đã order thành công');
    }
}
$('body').click(function(e) {
    var clicked_class = e.target.getAttribute("class");
    if (clicked_class === "navbar-toggler" || clicked_class === "navbar-toggler-icon") {} else if (clicked_class === "nav-link") {

    } else {
        if ($(".navbar-collapse").hasClass("show") == true) {
            $(".navbar-toggler").click();
        }
    }
});