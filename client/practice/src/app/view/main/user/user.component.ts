import { Component, ViewChild } from '@angular/core';
import { FlServiceName, FlDialog } from 'fl-framework-angular';
import { ComponentBase } from '../../../base/component-base';
import { MstUser, UserParamDto, UserReturnDto } from '../../../dto/mst-user';
import { UserEditComponent } from '../../popup/user-edit/user-edit.component';
import { isSuccess } from '../../../utils/common-util';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';


export interface User {
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

@FlServiceName('User')
export class UserComponent extends ComponentBase {

  /*bookGenreタブ*/
  myControl = new FormControl();
  options: User[] = [
    { name: '漫画' },
    { name: 'エッセイ' },
    { name: '小説' },
    { name: '絵本' },
    { name: '参考書' },
    { name: '自己啓発' }
  ];
  filteredOptions: Observable<User[]>;

  displayCols = ['del', 'edit', 'checkBox', 'bookId', 'bookName', 'bookNo', 'bookAuthor', 'bookPublisher', 'bookGenre', 'bookRelease', 'bookBuy', 'bookPosition', 'bookpicter'];
  dataSource: Array<MstUser>;
  dataSources;
  bookId: string;
  bookName: string;
  bookNo: string;
  bookAuthor: string;
  bookPublisher: string;
  bookGenre: string;
  bookRelease: string;
  bookBuy: string;
  bookPosition: string;
  bookCheck: number;
  bookPicter: string;
  selection = new SelectionModel<MstUser>(true, []);

  constructor(private dialog: FlDialog) {
    super();
  }

  /**
   * init
   */
  initializeView(): void {
    /*bookGenreタブ*/
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  /**
   * viewCompleted
   */
  createCompleteView(): void {
    this.doSearch();
  }

  /**
   * 編集アイコン押下時のイベント
   */
  iconEditOnClick(item: MstUser, isEdit = true): void {
    console.log(item);
    this.dialog.open(UserEditComponent,
      {
        width: '500px',
        height: 'auto',
        data: {
          editItem: item,
          isEdit: isEdit
        }
      }
    ).afterClosed().subscribe((result) => {
      // 更新あり
      if (result) {
        // 再検索
        this.doSearch();
      }
    });
  }

  /**
   * 検索ボタン押下時のイベント
   */
  btnSearchOnClick(): void {
    this.doSearch();
  }
  btnNewClick(): void {
    this.iconEditOnClick(new MstUser(), false);
  }

  /**
   * 検索実行
   */
  private doSearch(): void {
    this.search<UserReturnDto>(this.createUserParam()).subscribe(event => {
      if (isSuccess(event)) {
        this.dataSource = event.users;
        this.dataSources = new MatTableDataSource(this.dataSource);
        console.log(JSON.stringify(this.dataSource));
        this.ngAfterViewInit();
      }
    });
  }

  /**
   * ユーザーパラメータ作成
   */
  private createUserParam(): UserParamDto {
    return {
      bookId: this.bookId,
      bookName: this.bookName,
      bookNo: this.bookNo,
      bookAuthor: this.bookAuthor,
      bookPublisher: this.bookPosition,
      bookGenre: this.bookGenre,
      bookRelease: this.bookRelease,
      bookBuy: this.bookBuy,
      bookPosition: this.bookPosition,
      bookCheck: this.bookCheck,
      bookPicter: this.bookPicter
    } as UserParamDto;
  }


  //削除処理
  deleteBtnOnClick(item: MstUser): void {
    this.regist<UserReturnDto>(this.deleteUserEditParam(item)).subscribe(event => {
      if (isSuccess(event)) {
        this.dataSource = event.users;
        console.log(event.result.message);
      }
      // 再検索
      this.doSearch();
    });
  }

  private deleteUserEditParam(item: MstUser): UserParamDto {
    const result = new UserParamDto();
    result.bookId = item.bookId;
    result.bookCheck = 2;
    console.log(result.bookCheck);
    return result;
  }

  /**
* checkbox処理
*/
  checkBtnOnClick(item: MstUser): void {
    this.regist<UserReturnDto>(this.checkBoxUserparamDto(item)).subscribe(event => {
      if (isSuccess(event)) {
        this.dataSource = event.users;
        console.log(this.dataSource);

      }
      // 再検索
      this.doSearch();
    });
  }

  private checkBoxUserparamDto(item: MstUser): UserParamDto {
    const result = new UserParamDto();
    result.bookId = item.bookId;
    result.bookCheck = item.bookCheck;

    return result;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSources.sort = this.sort;
    this.dataSources.paginator = this.paginator;
  }

  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;
  imgSrc: string | ArrayBuffer = "";

  //画像処理
  picterBtnOnClick(item: MstUser): void {

    console.log("画像処理");

    this.regist<UserReturnDto>(this.picterUserParam(item)).subscribe(event => {
      if (isSuccess(event)) {
        this.dataSource = event.users;
      }
      // 再検索
      this.doSearch();
    });
  }

  // //画像挿入処理
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    let reader = new FileReader();
    this.file = files[0];
    reader.onload = () => {
      this.imgSrc = reader.result;
    }
    reader.readAsDataURL(this.file);
    console.log(this.file);
  }

  private picterUserParam(item: MstUser): UserParamDto {
    const result = new UserParamDto();
    result.bookId = item.bookId;
    result.bookPicter = this.file;
    result.bookCheck = 3;
    console.log(result.bookPicter);
    console.log(result.bookCheck);
    return result;
  }
}
