// Footer
function sendEmail() {
    Email.send({
        SecureToken: "bada3c01-2766-417c-98f4-d65070809fe7",
        To: 'beautyravi25@gmail.com',
        From: document.getElementById("email").value,
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById('email').value
            + "<br> Phone no.: " + document.getElementById('phone').value
            + "<br> Message: " + document.getElementById('message').value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}
// Footer end
// nav bar
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
// nav bar end