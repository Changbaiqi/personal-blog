package com.cbq.blogsserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

@Controller
public class TesController {
    @RequestMapping("/")
    public String index(Model model, HttpServletResponse response){
//        model.addAllAttributes("name","simonsfan");
        return "redirect:/blog/index.html";
    }
}
