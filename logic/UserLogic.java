package jp.co.neut.ts.practice.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import jp.co.neut.framework.interfaces.IParamDto;
import jp.co.neut.framework.interfaces.IReturnDto;
import jp.co.neut.framework.spring.base.FljBaseLogic;
import jp.co.neut.ts.practice.dao.MstUserDao;
import jp.co.neut.ts.practice.dto.user.UserParamDto;
import jp.co.neut.ts.practice.dto.user.UserReturnDto;

@Transactional
public class UserLogic extends FljBaseLogic {

	@Autowired
	MstUserDao mstUserDao;

	@Override
	public IReturnDto init(IParamDto arg0) {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}

	@Override
	public IReturnDto regist(IParamDto arg0) {

		UserParamDto param = this.dynamicCast(arg0);

		var result = new UserReturnDto();
		int i = mstUserDao.deleteUser(param.userId);
		if (i <= 0) {
			throw makeFljException("E00_1000", new Exception("delete fail."));
//			ResultDto res = new ResultDto();
//			res.success = false;
//			res.message = "メッセージエラー";
//			result.setResult(res);
		}
		UserParamDto userParamDto = new UserParamDto();
		result.users = mstUserDao.selectUser(userParamDto);

		return result;

	}

	@Override
	public IReturnDto search(IParamDto arg0) {

		UserParamDto param = this.dynamicCast(arg0);
		var result = new UserReturnDto();
		result.users = mstUserDao.selectUser(param);

		return result;

	}

}
