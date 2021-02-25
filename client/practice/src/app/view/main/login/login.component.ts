import { Component } from '@angular/core';
import { isEmpty } from 'fl-framework-angular';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { ComponentBase } from '../../../base/component-base';
import { AuthService } from '../../../service/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends ComponentBase {

  bookId: string;

  bookNo: string;

  errorMsg: string;
  
  hide = true;

  initializeView(): void {
  }
  createCompleteView(): void {
  }

  constructor(private authService: AuthService ) {
    super();
  }

  loginClick(): void {
    if (isEmpty(this.bookId) || isEmpty(this.bookNo)) {
      this.flAlert.showError('入力されていない項目があります。', '【 要 確認 】');
    
      return;
    }
    // 入力値
    this.authService.doLogin(this.bookId, this.bookNo).subscribe(result => {
      if (result) {
        // ログイン成功
        this.router.navigate(['top']);
      }
    });
  }
}
