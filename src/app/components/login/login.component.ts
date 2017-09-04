import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingmeService } from '../../services/parkingme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  userResponse: any;
  constructor(private router: Router, private parkMeService: ParkingmeService) { }

  ngOnInit() {

  }

  login(isValid: boolean){
    if(isValid){
      const data = {
        email: this.email,
        password: this.password
      };
      
      this.parkMeService.login(data).subscribe((response) => {
        this.userResponse = response;
        this.router.navigateByUrl('/home');
      }, resFileError => {
      console.log(JSON.parse(resFileError['_body']));
      });
    }else{
      console.log('error');
    }
    
  }

}
