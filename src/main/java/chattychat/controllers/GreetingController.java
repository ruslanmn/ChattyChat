package chattychat.controllers;


import chattychat.controllers.pojo.Greeting;
import chattychat.controllers.pojo.NameInfo;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {


    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(NameInfo nameInfo) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new Greeting("Hello, " + nameInfo.getName() + "!");
    }

}