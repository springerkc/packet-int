import { Component } from '@angular/core';
import { DevicesService, Devices } from '../../core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  users;

  constructor(private _devicesService: DevicesService) { }

  getProjectDevices() {
    this._devicesService.getProjectDevices('ca73364c-6023-4935-9137-2132e73c20b4').subscribe((devices: Devices) => {
      console.log(devices);
    });
  }
}
