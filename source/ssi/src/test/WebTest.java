package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.xuezhiwen.biz.UserService;
import com.xuezhiwen.entity.User;

public class WebTest {
	

	public static void main(String[] args) {
		String[] paths = { "classpath:config/applicationContext-beans.xml","classpath:config/applicationContext-common.xml"};
		ApplicationContext ctx = new FileSystemXmlApplicationContext(paths);
		UserService service= (UserService) ctx.getBean("userSericeImpl");
		User user = service.findByUsername("haha");
		System.out.println(user);
	}
}
