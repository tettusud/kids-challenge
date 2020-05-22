import { NgModule } from '@angular/core';
import { SpellingHomeComponent } from './spelling-home/spelling-home.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: '',
    component: SpellingHomeComponent
  }
];


@NgModule({
  declarations: [SpellingHomeComponent, ResultsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SpellingsModule { }
