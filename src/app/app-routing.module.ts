import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', component:HomeComponent},
  {path:'projects', component:ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
