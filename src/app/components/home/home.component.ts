import { Component, OnInit } from '@angular/core';
import { ParkingmeService } from '../../services/parkingme.service';

import { DialogService } from "ng2-bootstrap-modal";

import { TimeModalComponent } from './../time-modal/time-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo: any = {};
  userLocalStorage: any = {};
  constructor(private parkMeService: ParkingmeService, private dialogService:DialogService) { }


  ngOnInit() {
    this.userLocalStorage = localStorage.getItem('currentUser');
    this.getUser();
  }

  getUser(){
    this.parkMeService.getUser().subscribe((response) => {
      this.userInfo = response;console.log(this.userInfo);
      console.log(this.userInfo)
    }, resFileError => {
    console.log(JSON.parse(resFileError['_body']));
    });
  }
  
  showConfirm() {
    let disposable = this.dialogService.addDialog(TimeModalComponent, {});
  }
}

