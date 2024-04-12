import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowblocComponent } from './Bloc/showbloc/showbloc.component';
import { UpdateblocComponent } from './Bloc/updatebloc/updatebloc.component';
import { AddBlocComponent } from './Bloc/add-bloc/add-bloc.component';

const routes: Routes = [
  
  { path: 'add', component: AddBlocComponent },
  { path: '', component:  ShowblocComponent },
  { path: 'update/:id', component: UpdateblocComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
