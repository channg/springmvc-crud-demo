package com.xuezhiwen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.ModelAndView;

@Controller
@RequestMapping("/view")
public class ViewController {
	@RequestMapping("/main")
	public String  main(){
		return "/power/main.html";
	}
	@RequestMapping("/edit")
	public String  edit(){
		return "/power/edit.html";
	}
	@RequestMapping("/some")
	public String  some(){
		return "/power/some.html";
	}
	@RequestMapping("/base")
	public String  base(){
		return "/power/base.html";
	}
}
