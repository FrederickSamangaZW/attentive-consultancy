package com.attentiveconsultancy.attentiveconsultancyweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MessageController {
    @GetMapping("/")
    public String home() {
        return "home";
    }
}