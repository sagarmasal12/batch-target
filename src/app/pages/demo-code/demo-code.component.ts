import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-code',
  imports: [],
  templateUrl: './demo-code.component.html',
  styleUrl: './demo-code.component.css'
})
export class DemoCodeComponent {

  count= 0;

  handleIncrement(){
    this.count= this.count+1;
  }
  
  handleDecrement(){
    this.count=this.count-1;
  }

  handleReset(){
    this.count=0
  }
}
