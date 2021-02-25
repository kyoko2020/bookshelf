import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlServiceName } from 'fl-framework-angular';
import { isSuccess } from 'src/app/utils/common-util';
import { ComponentBase } from '../../../base/component-base';
import { MstUser, UserParamDto, UserReturnDto } from '../../../dto/mst-user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
@FlServiceName('UserEdit')
export class UserEditComponent extends ComponentBase {

  /** 編集データ */
  editItem: MstUser = new MstUser();
  isEdit: boolean;
  isDel: boolean;
  isCheck: boolean;
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    private data: { editItem: MstUser, isEdit: boolean, isDel: boolean, isCheck: boolean}) {
    super();
  }

  /**
   * init
   */
  initializeView(): void {
  }

  /**S
   */
  createCompleteView(): void {
    console.log(this.data);
    if (this.data && this.data.editItem) {
      this.editItem = this.data.editItem;
      this.isEdit = this.data.isEdit;
      this.isDel = this.data.isDel;
      this.isCheck = this.data.isCheck;

    }
  }

  /**
   * 登録ボタン押下時のイベント
   */
  registerBtnOnClick(): void {
    // 登録処理

    this.regist<UserReturnDto>(this.createUserEditParam()).subscribe(event => {
      if (isSuccess(event)) {
        // this.dataSource = event.users;
        // 完了で閉じる
        this.dialogRef.close(this.editItem);
      }
    });
  }
  private createUserEditParam(): UserParamDto {
    const result = new UserParamDto();
    result.bookId = this.editItem.bookId;
    result.bookName = this.editItem.bookName;
    result.bookNo = this.editItem.bookNo;
    result.bookAuthor = this.editItem.bookAuthor;
    result.bookPublisher = this.editItem.bookPublisher;
    result.bookGenre = this.editItem.bookGenre;
    result.bookRelease = this.editItem.bookRelease;
    result.bookBuy = this.editItem.bookBuy;
    result.bookPosition = this.editItem.bookPosition;
    result.bookCheck = 0;
    return result;
  }

  /**
   * キャンセルボタン押下時のイベント
   */
  cancelBtnOnClick(): void {
    this.dialogRef.close(null);
  }

}
