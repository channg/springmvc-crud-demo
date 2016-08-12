package com.xuezhiwen.mapper;

import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.Mapper;

import com.xuezhiwen.entity.User;

@Mapper("userMapper")
public interface UserMapper {
	@Select("select * from lian_user where username = #{username}")  
	public User findByUsername(String username);
}
