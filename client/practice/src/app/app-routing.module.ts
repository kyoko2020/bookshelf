import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './view/main/top/top.component';
import { UserComponent } from './view/main/user/user.component';
import { LoginComponent } from './view/main/login/login.component';
import { AuthGuard } from './guard/auth.guard';

/**
 * メイン画面コンポーネント
 */
export const RouteComponents: Array<any> = [
  TopComponent,
  UserComponent,
  LoginComponent
];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'top' },
  { path: 'top', component: TopComponent, canActivate:[AuthGuard] },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
