import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects.model';
import { ProjectsService } from '../services/projects.service';

@Injectable()
export class ProjectsResolver implements Resolve<Projects> {
  constructor(private _projectsService: ProjectsService) {}

  resolve(): Observable<Projects> {
    return this._projectsService.getAllProjects();
  }
}
