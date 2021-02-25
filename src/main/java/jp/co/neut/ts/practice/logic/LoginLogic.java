package jp.co.neut.ts.practice.logic;



import org.springframework.beans.factory.annotation.Autowired;

import jp.co.neut.framework.interfaces.IParamDto;
import jp.co.neut.framework.interfaces.IReturnDto;
import jp.co.neut.framework.spring.base.FljBaseLogic;
import jp.co.neut.ts.practice.dao.MstUserDao;
import jp.co.neut.ts.practice.dto.login.LoginParamDto;
import jp.co.neut.ts.practice.dto.login.LoginReturnDto;

public class LoginLogic extends FljBaseLogic {

//    private static Logger logger = LoggerFactory.getLogger(LoginLogic.class);

    @Autowired
    MstUserDao mstUserDao;

    @Override
    public IReturnDto init(IParamDto arg0) {
        return null;
    }

    @Override
    public IReturnDto regist(IParamDto arg0) {
        return null;
    }

    @Override
    public IReturnDto search(IParamDto arg0) {
        // LoginParamDtoに変換
        final LoginParamDto param = dynamicCast(arg0);
        final var result = new LoginReturnDto();

        result.userInfo = mstUserDao.loginUser(param.bookId, param.bookNo);

        if(result.userInfo == null) {
            // ユーザーがいなかったときの処理
              throw makeFljException("E20_0001", new Exception("mstUser login Error."));
          }

        return result;
    }


}