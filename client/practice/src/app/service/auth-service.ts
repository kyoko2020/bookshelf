import { Injectable } from '@angular/core';
import { FlHttpRequestService, FlAlertService } from 'fl-framework-angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MstUser } from '../dto/mst-user';
import { LoginReturnDto, LoginParamDto } from '../dto/data-transfer-objects';
import { isSuccess } from '../utils/common-util';
import { AuthGuard } from '../guard/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: MstUser;

  constructor(
    private http: FlHttpRequestService,
    private flAlert: FlAlertService,
    private router: Router
  ) {
  }

  doLogin(userId: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      this.http.post<LoginReturnDto>('LoginService', 'search', this.createLoginParam(userId, password), true, false).subscribe(result => {
        if (isSuccess(result)) {
          // データの保存
          // userdataというキーに値を割り当てて保存
          //  this.userInfo = result.userInfo;
          //   console.log(this.userInfo);

          localStorage.setItem('userData',JSON.stringify({bookId:result.userInfo.bookId,bookName:result.userInfo.bookName,bookNo:result.userInfo.bookNo,startTime: new Date().getTime()}));
          // var keyId = sessionStorage.getItem('userData');
          // データの取得
        
          var keyId = JSON.parse(localStorage.getItem('userData'));
          observer.next(keyId != null);
        }
        else {
          observer.next(false);
        }
      }, error => {
        observer.next(false);
      });
    });
  }

  createLoginParam(bookId: string, bookNo: string): LoginParamDto {
    const result = new LoginParamDto();
    result.bookId = bookId;
    result.bookNo = bookNo;
    return result;
  }

  logout() {
    // Remove token and profile from localStorage
    window.localStorage.removeItem('userData');
   
    // this.userInfo = undefined;
    this.router.navigate(['login']);
  };

}
