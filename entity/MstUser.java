package jp.co.neut.ts.practice.entity;

import org.seasar.doma.Column;
import org.seasar.doma.Entity;
import org.seasar.doma.Id;
import org.seasar.doma.Table;

/**
 *
 */
@Entity
@Table(name = "MST_USER")
public class MstUser {

    /** */
    @Id
    @Column(name = "USER_ID")
    public String userId;

    /** */
    @Column(name = "USER_NAME")
    public String userName;

    /** */
    @Column(name = "PW")
    public String pw;
}