package jp.co.neut.ts.practice.dto.user;

import java.util.List;

import jp.co.neut.framework.dto.ReturnDto;
import jp.co.neut.ts.practice.entity.MstUser;

public class UserEditReturnDto extends ReturnDto  {

    public List<MstUser> users;

}