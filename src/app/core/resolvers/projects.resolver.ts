import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Projects } from '../models/projects.model';
import { Observable } from 'rxjs';
import { ProjectsService } from '../services/projects.service';

@Injectable()
export class ProjectsResolver implements Resolve<Projects> {
  constructor(private _projetcsService: ProjectsService) {}

  resolve(): Observable<Projects> {
    return this._projetcsService.getAllProjects();
  }
}