import { Component, OnInit } from '@angular/core';

import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  startDate:Date;
  endDate:Date;
  weekDays:string[];
}

@Component({
  selector: 'app-time-modal',
  templateUrl: './time-modal.component.html',
  styleUrls: ['./time-modal.component.scss']
})
export class TimeModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  startDate: Date;
  endDate: Date;
  weekDays: string[];

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {

    this.result = true;
    this.close();
  }

}
