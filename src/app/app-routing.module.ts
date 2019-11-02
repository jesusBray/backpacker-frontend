import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { BusCompanyComponent } from './layout/bus-company/bus-company.component';
import { AdmComponent } from "./layout/adm/adm.component";
import { CreateAdmComponent } from "./layout/adm/create-adm/create-adm.component";
import { AdmRoutingModule } from "./layout/adm/adm-routing.module";

const routes: Routes = [
  {path:'',redirectTo:'main', pathMatch:'full'},
  {path:'main', component: LayoutComponent},
  {path:'user', component: AdmComponent},
  {path:'companyBus', component: BusCompanyComponent},
  {path:'createAdm', component: CreateAdmComponent},
];

@NgModule({
  imports: [AdmRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
