package com.springtutorials.payroll;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    /*  It returns index as the name of the template, which Spring Boot’s
     *  autoconfigured view resolver will map to
     *  src/main/resources/templates/index.html. */
    public String index() {
        return "index";
    }

}
