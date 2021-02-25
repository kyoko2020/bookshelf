package jp.co.neut.ts.practice.dao;


import java.util.List;

import org.seasar.doma.Dao;
import org.seasar.doma.Delete;
import org.seasar.doma.Insert;
import org.seasar.doma.Select;
import org.seasar.doma.Update;
import org.seasar.doma.boot.ConfigAutowireable;

import jp.co.neut.ts.practice.dto.user.UserEditParamDto;
import jp.co.neut.ts.practice.dto.user.UserParamDto;
import jp.co.neut.ts.practice.entity.MstUser;

/**
 * neutral
 */
@Dao
@ConfigAutowireable
public interface MstUserDao {

    /**
     * @param id
     * @return the MstUser entity
     */
    @Select
    MstUser selectById(String bookId);

    @Select
    List<MstUser> selectUser(UserParamDto param);

    @Update(sqlFile = true)
    int updateUser(UserEditParamDto param);

    @Insert(sqlFile = true)
    int insertUser(UserEditParamDto param);

    @Delete(sqlFile = true)
    int deleteUser(String bookId);

    @Select
    MstUser loginUser(String bookId,String bookNo);

    @Update(sqlFile = true)
    int checkUser(String bookId,int bookCheck);

    @Update(sqlFile = true)
    int updatePicter(String bookId, String bookPicter);

}