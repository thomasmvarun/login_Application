import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service'; 

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private MyServiceService:MyServiceService) { }
 displayName:any = undefined;
  ngOnInit() {
  this.displayName =this.MyServiceService.getData();
  console.log(this.displayName);
  }

  value:string;
  
}
