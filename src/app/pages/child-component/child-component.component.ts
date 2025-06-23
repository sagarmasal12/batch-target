import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent implements OnInit {

  @Input() uname:string=''

  constructor(){

  }

  ngOnInit(): void {
    
  }
}

