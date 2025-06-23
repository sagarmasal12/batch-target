import { Component } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";

@Component({
  selector: 'app-dashboard',
  imports: [ChildComponentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userName:string='Joel Pareira';

  childData:string='';
   
  ParentMethod(data:string){
    this.childData =data;
  }
}
