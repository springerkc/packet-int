import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devices, ProjectsService } from '../../../core';
import { Projects } from 'src/app/core/models/projects.model';


@Component({
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.less']
})
export class DevicesListComponent {
  projectId: string;
  devices: Devices;
  projects: Projects;

  constructor(private _router: Router, private _route: ActivatedRoute, private _projectsService: ProjectsService) {
    this.projectId = this._route.snapshot.paramMap.get('project_id');
    this._route.data.subscribe((data: any) => {
      if (this.projectId && data && data.devices && data.devices.devices) {
        this.devices = data.devices as Devices;
      }
      if (data && data.projects && data.projects.projects) {
        this.projects = data.projects as Projects;
      }
    });
  }

  projectSelectChange(value) {
    this._router.navigateByUrl(`/devices/${value}`);
  }
}
