package com.xuezhiwen.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.xuezhiwen.biz.UserService;
import com.xuezhiwen.entity.User;
import com.xuezhiwen.utils.Constant;

@Controller
@RequestMapping("/log")
public class LoginController implements Constant{
	@Autowired
	UserService userService;
	
	@ResponseBody
	@RequestMapping(value ="/hasSession")
	public String hasSession(HttpServletRequest request,HttpSession httpSession){
		User  sessionUser = (User) httpSession.getAttribute("user");
		if(sessionUser!=null){
			String str = JSONObject.toJSONString(sessionUser);
			return str;
		}
		return FAIL;
	}
	
	@ResponseBody
	@RequestMapping("/login")
	public String login(HttpServletRequest request,String username,String password,HttpSession httpSession) {
			User user = userService.findByUsername(username);
			if(user==null){
				return FAIL;
			}
			if(user.getPassword().equals(password)){
				httpSession.setAttribute("user", user);
				String str = JSONObject.toJSONString(user);
				return str;
			}
				return FAIL;
	}
}
	