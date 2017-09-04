import { Component, OnInit } from '@angular/core';

import { DialogService } from "ng2-bootstrap-modal";

import { TimeModalComponent } from './../time-modal/time-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private dialogService:DialogService) { }

  showConfirm() {
    let disposable = this.dialogService.addDialog(TimeModalComponent, {});

  }
}