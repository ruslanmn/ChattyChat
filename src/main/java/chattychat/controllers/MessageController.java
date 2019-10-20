package chattychat.controllers;

import chattychat.controllers.pojo.Message;
import org.apache.logging.log4j.message.SimpleMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MessageController {

    @MessageMapping("/add-message")
    @SendTo("/topic/messages")
    public Message addMessage(Message message, SimpMessageHeaderAccessor headerAccessor) {
        message.setSender(headerAccessor.getSessionAttributes().get("ip").toString());
        return message;
    }
}
