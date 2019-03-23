import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, ProjectsComponent, DevicesComponent, UsersComponent } from './pages';
import { ProjectsResolver } from './core';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    resolve: { projects: ProjectsResolver },
  },
  {
    path: 'projects', component: ProjectsComponent,
    resolve: { projects: ProjectsResolver },
  },
  { path: 'devices', component: DevicesComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
