import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  /*{
    path: 'pages',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages-layout/pages-layout.module').then(m => m.PagesLayoutModule),
      }
    ]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
