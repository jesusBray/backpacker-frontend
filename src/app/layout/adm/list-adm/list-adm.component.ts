import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AdmService } from "../../../core/adm.service";
import { User} from "../../../module/user";
import { error } from 'util';


@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.css']
})
export class ListAdmComponent implements OnInit {
  private items: any[];
  private option:any;
  constructor(private server: AdmService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.server.getUsers().subscribe(
      value => this.items = value
    );
  }

  deleteOption(value) {
    this.server.deleteUser(value)
    this.getUsers();
  }

  editOption(user: User) {
    this.getUsers();
    this.option = 1;
    localStorage.setItem('id',JSON.stringify(user));
    // console.log(user);
    
  }
}
