import { NgModule } from '@angular/core';
import { OddmanHomeComponent } from './oddman-home/oddman-home.component';
import { Routes, RouterModule } from '@angular/router';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: OddmanHomeComponent
  }
];

@NgModule({
  declarations: [OddmanHomeComponent, ResultDialogComponent],
  imports: [ RouterModule.forChild(routes),
    SharedModule
  ],
})
export class OddmanModule { }
