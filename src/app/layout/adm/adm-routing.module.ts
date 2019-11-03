import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmComponent } from "./adm.component";

const routes: Routes =  [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: AdmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
