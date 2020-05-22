import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'spellings',
    loadChildren: () => import('./spellings/spellings.module').then(m => m.SpellingsModule)
  },
  {
    path: 'oddman',
    loadChildren: () => import('./oddman/oddman.module').then(m => m.OddmanModule)
  },
  {path:"" ,redirectTo:"oddman" ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
