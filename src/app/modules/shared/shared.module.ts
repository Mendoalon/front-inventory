import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenaComponent } from './components/sidena/sidena.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    SidenaComponent,
    ConfirmComponent,
    
  ],
  exports:[
    SidenaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
    
  ]
})
export class SharedModule { }
