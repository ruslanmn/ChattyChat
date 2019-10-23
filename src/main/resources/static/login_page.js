var username = null, password = null;
var error = null;

function buildUser() {
    let user = {};
    user.name = username.val();
    user.password = password.val();

    return user;
}

function sendUserData(endpoint) {
    let user = buildUser();
    $.post( endpoint, function() {
        alert( "success" );
    })
        .done(function() {
            // todo redirect
            alert( "Success" );
        })
        .fail(function(errorMessage) {
            showError(errorMessage);
        });

}

function login() {
    // todo
    sendUserData("login/endpoint");
}


function signuo() {
    // todo
    sendUserData("signup/endpoint");
}

function showError(message) {
    error.val(message);
}

$(function () {
    username = $("#username");
    password = $("#password");
    error = $("#error");


    $( "#login" ).click(login);
    $( "#signup" ).click(signup);
});

