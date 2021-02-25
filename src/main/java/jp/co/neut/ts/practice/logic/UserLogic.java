package jp.co.neut.ts.practice.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import jp.co.neut.framework.dto.ResultDto;
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

		//SQLのデータを格納する
		UserReturnDto result = new UserReturnDto();
	       var searceResults =  mstUserDao.selectById(param.bookId);


		int i = 1;
		if(searceResults != null) {
			
			if(param.bookCheck == 2) {
				//削除
				i = mstUserDao.deleteUser(param.bookId);
				
			} else if(param.bookCheck == 3) {
				//写真
				i = mstUserDao.updatePicter(param.bookId,param.bookPicter);
				
			}else {		    	
				//チェックボックス
				if(param.bookCheck == 1 ){
					param.bookCheck =0;
				}else {
					param.bookCheck =1;
				}
				i = mstUserDao.checkUser(param.bookId, param.bookCheck);
			}
		}else{
			i = -1;
		}

		//SQLで失敗した場合(-1だったら)エラーを出す
		if (i <= 0) {
			ResultDto res = new ResultDto();
			res.success = false;
			res.message = "メッセージエラー";
			result.setResult(res);
			throw makeFljException("E00_1000", new Exception("delete fail."));
		}

		UserParamDto userParamDto = new UserParamDto();
		result.users = mstUserDao.selectUser(userParamDto);

		return result;
	}

	@Override
	public IReturnDto search(IParamDto arg0) {

		UserParamDto param = this.dynamicCast(arg0);
		UserReturnDto result = new UserReturnDto();
		result.users = mstUserDao.selectUser(param);

		if (param.bookName != null && param.bookName != "") {
			param.bookName = "%" + param.bookName + "%";
		}
		if (param.bookGenre != null && param.bookGenre != "") {
			param.bookGenre = "%" + param.bookGenre + "%";
		}
		if (param.bookAuthor != null && param.bookAuthor != "") {
			param.bookAuthor = "%" + param.bookAuthor + "%";
		}

		result.users = mstUserDao.selectUser(param);

		return result;

	}

}
