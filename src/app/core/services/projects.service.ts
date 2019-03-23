import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Constants } from '../models/constants';
import { Projects } from '../models/projects.model';

@Injectable()
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Projects> {
    return this.httpClient.get<Projects>(`${Constants.apiRoot}projects`);
  }

  // no access 403?
  // getProjectsBasic() {
  //   return this.httpClient.get(`${Constants.apiRoot}user?include=projects`);
  // }
}
