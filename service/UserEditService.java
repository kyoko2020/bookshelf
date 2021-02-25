package jp.co.neut.ts.practice.service;

import org.springframework.beans.factory.annotation.Autowired;

import jp.co.neut.framework.spring.base.FljBaseLogic;
import jp.co.neut.framework.spring.base.FljBaseService;
import jp.co.neut.ts.practice.logic.UserEditLogic;

public class UserEditService extends FljBaseService {

	@Autowired
	UserEditLogic usereditlogic;

	@Override
	protected FljBaseLogic getLogicClass() {

		return usereditlogic;
	}

}
