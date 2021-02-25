package jp.co.neut.ts.practice.entity;

import org.seasar.doma.Column;
import org.seasar.doma.Entity;
import org.seasar.doma.Table;
import org.springframework.data.annotation.Id;

/**
 *
 */
@Entity
@Table(name = "MST_BOOK")
public class MstUser {

    /** */
    @Column(name = "BOOK_NAME")
    public String bookName;

    /** */
    @Id
    @Column(name = "BOOK_ID")
    public String bookId;

    /** */
    @Column(name = "BOOK_NO")
    public String bookNo;

    /** */
    @Column(name = "BOOK_AUTHOR")
    public String bookAuthor;

    /** */
    @Column(name = "BOOK_PUBLISHER")
    public String bookPublisher;

    /** */
    @Column(name = "BOOK_GENRE")
    public String bookGenre;

    /** */
    @Column(name = "BOOK_RELEASE")
    public String bookRelease;

    /** */
    @Column(name = "BOOK_BUY")
    public String bookBuy;

    /** */
    @Column(name = "BOOK_POSITION")
    public String bookPosition;

    /** */
    @Column(name = "BOOK_CHECK")
    public boolean bookCheck;

    /** */
    @Column(name = "BOOK_PICTER")
    public boolean bookPicter;

}