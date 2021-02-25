SELECT
	*
FROM MST_BOOK

WHERE 1=1
/*%if param.bookName != null && param.bookName !=""*/
AND BOOK_NAME LIKE /* param.bookName */'鬼滅の刃'
/*%end*/
/*%if param.bookGenre != null && param.bookGenre !="" */
AND BOOK_GENRE LIKE /* param.bookGenre */'漫画'
/*%end*/
/*%if param.bookAuthor != null && param.bookAuthor !="" */
AND BOOK_AUTHOR LIKE /* param.bookAuthor */'岸本'
/*%end*/

