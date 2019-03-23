import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, ProjectsComponent, DevicesListComponent, UsersComponent } from './pages';
import { ProjectsResolver, DevicesResolver } from './core';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    resolve: { projects: ProjectsResolver },
  },
  {
    path: 'projects', component: ProjectsComponent,
    resolve: { projects: ProjectsResolver },
  },
  {
    path: 'devices', component: DevicesListComponent,
    resolve: { devices: DevicesResolver, projects: ProjectsResolver },
  },
  {
    path: 'devices/:project_id', component: DevicesListComponent, pathMatch: 'full',
    resolve: { devices: DevicesResolver, projects: ProjectsResolver },
  },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
