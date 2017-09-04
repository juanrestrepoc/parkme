import { Component, OnInit } from '@angular/core';
import { ParkingmeService } from '../../services/parkingme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo: any = {};
  constructor(private parkMeService: ParkingmeService) { }

  ngOnInit() {
    this.userInfo = this.getUser();
    console.log(this.userInfo)
    console.log(localStorage.getItem('currentUser'))
  }

  getUser(){
    this.parkMeService.getUser().subscribe((response) => {
     console.log(response)
    }, resFileError => {
    console.log(JSON.parse(resFileError['_body']));
    });
  }
}
