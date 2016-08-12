package com.xuezhiwen.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/jsonp")
public class JsonpController {
	@ResponseBody
	@RequestMapping("/get")
	public String get(HttpServletRequest request){
		return "alert(1);";
	}
}
