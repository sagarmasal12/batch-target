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

  name = '';
  displayname = "";
  getName(event:Event){
    const Name = (event.target as HTMLInputElement).value
    // console.log(Name);
    this.name=Name
    
  }
  showName(){
    this.displayname= this.name
  }
  setName(){
    this.name="Sagar"
  }


}
