import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, ProjectsComponent } from './pages';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
