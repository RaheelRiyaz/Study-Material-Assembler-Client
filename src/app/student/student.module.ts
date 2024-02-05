import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { BaseService } from '../services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[BaseService]
})
export class StudentModule { }
