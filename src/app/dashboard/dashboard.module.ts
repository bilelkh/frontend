import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {FileUploadService}from './services/file-upload.service'
import {DashboardRoutingModule}from './dashboard-routing.module'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [FileUploadService]
})
export class DashboardModule { }
