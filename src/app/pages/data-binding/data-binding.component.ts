import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent  {
  
  userId: any;
  firstName = 'sagar';


  constructor(private route:ActivatedRoute){
    this.userId = route.snapshot.paramMap.get('id');
    console.log(this.userId);
    // this.firstName= "Sagar";
    this.showWlcomemsg()

    
  }
  
  // ngOnInit(): void {
  //   //  this.userId = this.route.snapshot.data[1].title;
  //   // console.log(this.userId)
  // }

  showWlcomemsg(){
    // alert("hello angular");
  }

  getClick(){
    console.log('button clicked')
  }

}
