const container_registration = document.querySelector('.container_registration');
const container_login = document.querySelector('.container_login');

$('#open_reg_form').click(function() {
    container_registration.style.display = 'block';
    container_login.style.display = 'none'

});

$('#closebutton').click(function() {
    container_registration.style.display = 'none';
    container_login.style.display = 'block'
})

function authenticate() {
    let username = $('#username').val()
    let pass = $('#password').val()

    if(username == 'laurence' && pass == 'pilapil') {
        location.href = 'profile.html'
        username.val('')
        pass.val('')
    }
}