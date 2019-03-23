import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent {
  menuOpen = false;

  close() {
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
