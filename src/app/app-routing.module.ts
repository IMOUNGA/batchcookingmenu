import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ComingSoonComponent} from "./coming-soon/coming-soon.component";

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
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
