import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { AdmComponent } from "./layout/adm/adm.component";

const routes: Routes = [
  {path:'',redirectTo:'main', pathMatch:'full'},
  {path:'main', component: LayoutComponent},
  {path:'user', component: AdmComponent},
  //here redirect a child path
  {path:'login', loadChildren: './layout/adm/adm.module#AdmModule'},
  //if not found a spesific path, you redirection the principal path
  { path: '**', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
