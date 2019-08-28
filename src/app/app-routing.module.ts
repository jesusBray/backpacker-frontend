import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { BusCompanyComponent } from './layout/bus-company/bus-company.component';

const routes: Routes = [
  {path:'',redirectTo:'main', pathMatch:'full'},
  {path:'main', component: LayoutComponent},
  {path:'companyBus', component: BusCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
