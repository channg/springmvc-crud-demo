package com.xuezhiwen.biz.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.xuezhiwen.biz.UserService;
import com.xuezhiwen.entity.User;
import com.xuezhiwen.mapper.UserMapper;



@Service("userSericeImpl")
public class UserSericeImpl implements UserService {
	@Autowired
	@Qualifier("userMapper")
	private UserMapper mapper;
	
	
	public User findByUsername(String username) {
		return mapper.findByUsername(username);
	}

}
