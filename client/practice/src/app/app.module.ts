import { Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlFrameworkModule, FrameworkModule } from 'fl-framework-angular';
import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material-modules';
import { UserEditComponent } from './view/popup/user-edit/user-edit.component';

/**
 * ポップアップコンポーネント
 */
const PopupComponents: Array<any> = [
  UserEditComponent
];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponents,
    PopupComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlFrameworkModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules
  ],
  providers: [
    {
      // custom call setting
      provide: 'flRequestEndPoint', useValue:
      {
        host: '',  // Call from the default caller.
        contextName: '_api',   // server addr(URI) + / + contextName + / <serviceName> + / <methodName> + /
        appVersion: '0.0.1',   // Add version number to http header.
        versionName: 'version' // http header name.
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule extends FrameworkModule {
  constructor(injector: Injector) {
    super(injector);
  }
}
