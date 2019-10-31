import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports:[
    AuthComponent
  ],
})
export class AuthModule { }
