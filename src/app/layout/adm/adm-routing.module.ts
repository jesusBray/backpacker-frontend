import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmComponent } from "./adm.component";
import { ListAdmComponent } from "./list-adm/list-adm.component";
const routes: Routes =  [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: AdmComponent},
  {path: 'user/list', component: ListAdmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
