import { Component } from '@angular/core';
import { ComponentBase } from '../../../base/component-base';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent extends ComponentBase {

  constructor() {
    super();
  }

  /**
   * init
   */
  initializeView(): void {
  }

  /**ng 
   * viewCompleted
   */
  createCompleteView(): void {
  }
}
