package jp.co.neut.ts.practice.logic;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jp.co.neut.framework.interfaces.IParamDto;
import jp.co.neut.framework.interfaces.IReturnDto;
import jp.co.neut.framework.spring.base.FljBaseLogic;
import jp.co.neut.ts.practice.dto.login.LoginParamDto;
import jp.co.neut.ts.practice.dto.login.LoginReturnDto;
import jp.co.neut.ts.practice.entity.MstUser;

public class LoginLogic extends FljBaseLogic {

    private static Logger logger = LoggerFactory.getLogger(LoginLogic.class);

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

        logger.info("param userId={}, pw={}" , param.userId, param.pw);

        result.userInfo = new MstUser();

        return result;
    }


}