package com.xuezhiwen.biz;

import com.xuezhiwen.entity.User;

public interface UserService {
	
	public User findByUsername(String username);
}
