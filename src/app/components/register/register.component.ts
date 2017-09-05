import { Component, OnInit } from '@angular/core';
import { ParkingmeService } from '../../services/parkingme.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  fullname:string;
  identification:string;
  typeVehicle:string;
  plate:string;
  description:string;
  listVehicle:any [];
  response: any;


  constructor(private router: Router, private parkingService:ParkingmeService) {
    this.listVehicle = [];
   }

  add(){

    let vehicle = {
      plateNumber:this.plate,
      typeVehicle:this.typeVehicle,
      description:this.description
    }

    this.listVehicle.push(vehicle);
    this.typeVehicle="";
    this.plate = "";
    this.description="";

  }
  

  delete(vehicle){
    let index = this.listVehicle.indexOf(vehicle);
    this.listVehicle.splice(index,1);  
  }

  ngOnInit() {
  }

  register(){
    
    let user = {
      email: this.email,
      password:this.password,
      name: this.fullname,
      cc: this.identification,
      typeVehicle: this.typeVehicle,
      plate: this.plate,
      description: this.description,
      vehicles: this.listVehicle
    };

console.log(user);
    this.parkingService.registerUser(user).subscribe((response) => {
      this.response = response;
      this.router.navigateByUrl('/home');
    }, resFileError => {
    console.log(JSON.parse(resFileError['_body']));
    });;
  }

}


