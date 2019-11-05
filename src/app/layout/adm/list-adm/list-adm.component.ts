import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AdmService } from "../../../core/adm.service";
import { User} from "../../../module/user";


@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.css']
})
export class ListAdmComponent implements OnInit {

  private titleNames :string[]= ['ID','NAME','LAST NAME','ACTIONS']
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

  editOption(user) {
    this.getUsers();
    this.option = 1;
    localStorage.setItem('id',JSON.stringify(user));  
  }
}
