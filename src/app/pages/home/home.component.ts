import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from '../../core/models/projects.model';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  projects: Projects;
  devicesTotal = 0;
  usersTotal = 0;

  constructor(private _route: ActivatedRoute) {
    this._route.data.subscribe((data: any) => {
      if (data && data.projects && data.projects.projects) {
        this.projects = data.projects as Projects;
        this.projects.projects.forEach(project => {
          this.devicesTotal += project.devices.length;
          this.usersTotal += project.members.length;
        });
      }
    });
  }
}
