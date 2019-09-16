import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
 private data:any = undefined;

 setData(data: any){
this.data = data;
 }

 getData(){
return this.data;
 }
  constructor() { }

}
