package jp.co.neut.ts.practice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jp.co.neut.framework.spring.boot.FLSpringBootServletInitializer;

@SpringBootApplication
public class PracticeApplication extends FLSpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(PracticeApplication.class, args);
	}

	@Override
	protected String getAppVersionNameByGlobalConf() {
		return "";
	}

}
