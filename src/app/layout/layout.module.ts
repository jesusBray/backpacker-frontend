import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from "./layout.component";
import { BusCompanyComponent } from './bus-company/bus-company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardBusesComponent } from './dashboard-buses/dashboard-buses.component';
import { SeatDetailsComponent } from './bus-company/seat-details/seat-details.component';
import { SeatListComponent } from './bus-company/seat-list/seat-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthModule } from "../auth/auth.module";
import { AdmModule } from "./adm/adm.module";
import { ListBusesComponent } from './bus-company/list-buses/list-buses.component';
import { CreateBusComponent } from './bus-company/create-bus/create-bus.component';
import { EditBusComponent } from './bus-company/edit-bus/edit-bus.component';

@NgModule({
  declarations: [
    SideNavComponent,
    LayoutComponent,
    BusCompanyComponent,
    DashboardComponent,
    DashboardBusesComponent,
    SeatDetailsComponent,
    SeatListComponent,
    ListBusesComponent,
    CreateBusComponent,
    EditBusComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    AuthModule,
    AdmModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    LayoutComponent
  ],
})
export class LayoutModule2 { }
