import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fullname:string;
  identification:string;
  typeVehicle:string;
  plate:string;
  description:string;
  listVehicle:any [];


  constructor() {
    this.listVehicle = [];
   }

  add(){

    let vehicle = {
      plate:this.plate,
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

}


