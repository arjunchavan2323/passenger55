import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    DashbordComponent,
    CardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports:[DashbordComponent]
})
export class ModulesModule { }
