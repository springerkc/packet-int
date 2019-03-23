import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from '../../core/models/projects.model';


@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {
  projects: Projects;

  constructor(private _route: ActivatedRoute) {
    this._route.data.subscribe((data: any) => {
      if (data && data.projects && data.projects.projects) {
        this.projects = data.projects as Projects;
      }
    });
  }
}
