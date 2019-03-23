import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent {
  menuOpen = false;
  dropMenu = false;

  close() {
    this.menuOpen = false;
    this.dropMenu = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDropMenu() {
    this.dropMenu = !this.dropMenu;
  }
}
