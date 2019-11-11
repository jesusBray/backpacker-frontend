import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../auth.service";
import { User } from "../user";
import { error } from 'util';

const mockData = [
  {
    id: 22,
    apellido: "Gutierez",
    nombre: "Gonzalo",
    pasword: "gonz123",
    telefono: 232333
  },
  {
    id: 122,
    apellido: "Fernandez",
    nombre: "Romulo",
    pasword: "rom321",
    telefono: 4122222
  },
  {
    id: 712,
    apellido: "Fernandez",
    nombre: "adm ",
    pasword: "adm",
    telefono: 4122222
  },
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any;
  private userAux: User;
  private dataSource: User[] = mockData;
  constructor(private fb: FormBuilder,
    private activateRoute: ActivatedRoute, 
    private router: Router,
    private service: AuthService,
  ) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    userName: ['', Validators.required],
    pasword: ['', Validators.required],
  })

  onSubmit() {
    let dataUser = this.profileForm.value
    // if (this.profileForm.value.userName == 'adm' && this.profileForm.value.pasword == 'adm') {
    //   let id= '123';
    //   localStorage.setItem(id,'adm');
    // }
    // else if(this.profileForm.value.userName == this.userAux.nombre){
    //   alert("Password incorect!");
    // }
    // else{
    //   alert("User and Password incorects!!");
    // }
    this.service.getUserById(dataUser.userName).subscribe(resp => {
      console.log(resp);
    })
      
  }

}
