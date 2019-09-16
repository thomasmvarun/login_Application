import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  img: string ='Varun';
  userName:string;
  constructor(private MyServiceService:MyServiceService) { }

  
  
  ngOnInit() {
  }
 
  onLoginClick(){
    this.MyServiceService.setData(this.userName);
  }

}
