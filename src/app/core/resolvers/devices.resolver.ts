import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../services/devices.service';

@Injectable()
export class DevicesResolver implements Resolve<Devices> {
  projectId: string;
  constructor(private _devicesService: DevicesService, ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Devices> {
    this.projectId = route.paramMap.get('project_id');
    if (this.projectId) {
      return this._devicesService.getProjectDevices(this.projectId);
    }
  }
}
