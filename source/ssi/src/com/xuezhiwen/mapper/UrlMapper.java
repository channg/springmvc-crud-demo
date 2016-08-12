package com.xuezhiwen.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.Mapper;

import com.xuezhiwen.entity.Url;


@Mapper("urlMapper") 
public interface UrlMapper {
	@Select("select * from xue_url where id = #{id}")  
	public Url findUrl(String id);
	@Select("select * from xue_url where user = #{user}"	) 
	public List<Url> findByUser(String user);
	
}
