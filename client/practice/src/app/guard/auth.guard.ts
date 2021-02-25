import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth-service';

const TIME_LIMIT:number =60*60*24;


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  protected authService: AuthService;
  protected router: Router;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.createAuthGuardPromise(next, state);
  }

  protected createAuthGuardPromise(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {

      if (window.localStorage.getItem('userData') && timeProcessing()) {
        resolve(true);
      }
      else {
        //localstorageの内容削除
        resolve(false);
        localStorage.removeItem("userData");
        window.localStorage.clear();
        this.router.navigate(['login']);
        resolve(false);
      }
    });
  

   function timeProcessing():boolean{
    
    //ローカルストレージのでデータを保存
      var _jsonStoreObjs = JSON.parse(localStorage.getItem("userData"));
      var oBjTime = _jsonStoreObjs.startTime;

  
      if(oBjTime!= undefined){

          //ログインした時間と今の時間を比べる
          var nowTime = new Date().getTime();
          var diffTime = (nowTime-oBjTime)/1000;

          //TIME_LIMITで設定した時間をより大きかったら 次の画面
          if(diffTime < TIME_LIMIT){
            return true;
        }else{
          //時間が切れたら
          return false;
        }
    } }
  }
}
