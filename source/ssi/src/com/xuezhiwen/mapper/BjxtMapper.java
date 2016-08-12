package com.xuezhiwen.mapper;

import org.apache.ibatis.annotations.Delete;
import org.mybatis.spring.annotation.Mapper;
@Mapper 
public interface BjxtMapper {
	@Delete("delete from vr_codemanag")
	public void DeleteCodemanag();
	@Delete("delete from vr_machine")
	public void DeleteMachine();
	@Delete("delete from vr_expirelog")
	public void DeleteExpirelog();
}
