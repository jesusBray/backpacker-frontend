import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAdmComponent } from "./list-adm/list-adm.component";
import { CreateAdmComponent} from "./create-adm/create-adm.component";

const routes: Routes =  [
  {path: 'list', component: ListAdmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
