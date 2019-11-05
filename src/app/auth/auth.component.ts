import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({  
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Output() selectOptionAuth = new EventEmitter<string>();
  private Auth:String[]=['login','register'];
  constructor() { }

  ngOnInit() {
  }

  private getOption(value) {
    this.selectOptionAuth.emit(value);
  }
}
