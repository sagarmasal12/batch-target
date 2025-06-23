import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent implements OnInit {

  @Input() uname:string='';

  @Output() notify:EventEmitter<string>= new EventEmitter<string>


  passData(){
    this.notify.emit("this msg is comming from child component")
  }
  constructor(){

  }

  ngOnInit(): void {
    
  }
}

