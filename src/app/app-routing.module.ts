import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {PlaceholderComponent} from "./components/placeholder/placeholder.component";

const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'Settings', component: PlaceholderComponent},
  {path: 'Calendar', component: PlaceholderComponent},
  {path: 'Message', component: PlaceholderComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
