import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AdmService } from "../../../core/adm.service";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.css']
})
export class ListAdmComponent implements OnInit {

  private titleNames :string[]= ['NAME','LAST NAME','PHONE','ACTIONS']
  private items: any[];
  private option:any;
  constructor(private server: AdmService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.server.getAllUsers().subscribe(
      value => this.items = value._embedded.usuarioList
    );
  }

  deleteOption(value) {
    this.server.deleteUser(value).subscribe(resp => {
      if (error) {
        console.log('Error found: ', error);
      }
      
      console.log("sussesful delete resp");
    })
    this.getUsers();
  }

  editOption(user) {
    this.getUsers();
    this.option = 1;
    localStorage.setItem('id',JSON.stringify(user));  
  }
}
