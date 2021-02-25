package jp.co.neut.ts.practice.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import jp.co.neut.framework.interfaces.IParamDto;
import jp.co.neut.framework.interfaces.IReturnDto;
import jp.co.neut.framework.spring.base.FljBaseLogic;
import jp.co.neut.ts.practice.dao.MstUserDao;
import jp.co.neut.ts.practice.dto.login.LoginReturnDto;
import jp.co.neut.ts.practice.dto.user.UserEditParamDto;

@Transactional
public class UserEditLogic extends FljBaseLogic {

	@Autowired
	MstUserDao mstUserDao;

	@Override
	public IReturnDto init(IParamDto arg0) {

		return null;
	}

	@Override
	public IReturnDto regist(IParamDto arg0) {
		final UserEditParamDto param = dynamicCast(arg0);
		final var result = new LoginReturnDto();

		if (mstUserDao.selectById(param.userId) != null) {
			mstUserDao.updateUser(param);
		} else {
			mstUserDao.insertUser(param);
		}
		return result;

	}

	@Override
	public IReturnDto search(IParamDto arg0) {

		return null;

	}

}
