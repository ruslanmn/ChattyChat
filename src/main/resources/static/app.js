var stompClient = null;


var chatHistory = null;
var messageText = null;

function connect() {
    let socket = new SockJS('/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/messages', function (data) {
            addMessage(JSON.parse(data.body));
        });
    });
}

function addMessage(message) {
    chatHistory.append(`<div><b>${message.sender}</b>: ${message.text}</div>`);
    chatHistory[0].scrollTop = chatHistory[0].scrollHeight;
}

function sendMessage() {
    let text = messageText.val();
    if (text) {
        let message = {};
        message.text = text;
        stompClient.send("/app/add-message", {}, JSON.stringify(message));

        messageText.val('');
    }
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    connect();
    $( "#send" ).click(sendMessage);

    chatHistory = $("#chatHistory");
    messageText = $("#messageText");
});

