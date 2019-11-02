import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from "./adm.component";
import { CreateAdmComponent } from "./create-adm/create-adm.component";
import { ListAdmComponent } from "./list-adm/list-adm.component";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditAdmComponent } from './edit-adm/edit-adm.component';

@NgModule({
  declarations: [
    AdmComponent,
    CreateAdmComponent,
    ListAdmComponent,
    EditAdmComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    AdmComponent
  ],
})
export class AdmModule { }
