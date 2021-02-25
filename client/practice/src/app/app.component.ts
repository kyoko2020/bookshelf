import { Component, Input } from '@angular/core';
import { FlComponentBase } from 'fl-framework-angular';
import { from } from 'rxjs';
import { AuthService } from './service/auth-service';
import {AuthGuard} from './guard/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends FlComponentBase {
  // @Input() isSigningIn: boolean;

  constructor(public authService: AuthService , public authGuard: AuthGuard) {
    super();
  }

  /**
   * init
   */
  initializeView(): void {
  }

  /**
   * viewCompleted
   */
  createCompleteView(): void {
  }

  logoutbtnclick() {
    var display =confirm("本当にログアウトしてもいいですか？");
    if(display){
      //ログアウト成功
      this.authService.logout();
    }else{
      //ログアウトキャンセル
      window.alert('キャンセルされました'); // 警告ダイアログを表示 
    }

  }
}

