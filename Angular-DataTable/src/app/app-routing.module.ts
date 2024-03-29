import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableDetailsComponent} from "./table-details/table-details.component";
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'tableDetails/:id',
    component: TableDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
