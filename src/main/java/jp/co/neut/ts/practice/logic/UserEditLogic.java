package jp.co.neut.ts.practice.logic;

import java.util.regex.Pattern;

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
	       var searceResult =  mstUserDao.selectById(param.bookId);

	        if(searceResult != null) {

	        	mstUserDao.updateUser(param);

	        }else {
	        	if(isNumber(param.bookId)) {

	        	mstUserDao.insertUser(param);

	        	}else {
	        		 throw makeFljException("E00_0004", new Exception("number fail."));
	        	}
	        }

//		if (mstUserDao.selectById(param.userId) != null) {
//			mstUserDao.updateUser(param);
//		} else {
//			mstUserDao.insertUser(param);
//		}
		return result;

	}

	@Override
	public IReturnDto search(IParamDto arg0) {

		return null;

	}

	private boolean isNumber(String s) {
	    return Pattern.compile("^-?[0-9]+$").matcher(s).find();
	}

}
