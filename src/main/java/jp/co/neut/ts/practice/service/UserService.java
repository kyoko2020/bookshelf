package jp.co.neut.ts.practice.service;

import org.springframework.beans.factory.annotation.Autowired;

import jp.co.neut.framework.spring.base.FljBaseLogic;
import jp.co.neut.framework.spring.base.FljBaseService;
import jp.co.neut.ts.practice.logic.UserLogic;

public class UserService extends FljBaseService {

	@Autowired
	UserLogic userLogic;

	@Override
	protected FljBaseLogic getLogicClass() {
		return userLogic;
	}

}
