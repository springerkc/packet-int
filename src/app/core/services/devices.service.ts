import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Constants } from '../models/constants';
import { Devices } from '../models/devices.model';

@Injectable()
export class DevicesService {
  constructor(private httpClient: HttpClient) { }

  getProjectDevices(projectId): Observable<Devices> {
    return this.httpClient.get<Devices>(`${Constants.apiRoot}projects/${projectId}/devices`);
  }
}
