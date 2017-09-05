import { Component, OnInit } from '@angular/core';
import { ParkingmeService } from '../../services/parkingme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo: any = {};
  userLocalStorage: any = {};
  constructor(private parkMeService: ParkingmeService) { }

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
}
