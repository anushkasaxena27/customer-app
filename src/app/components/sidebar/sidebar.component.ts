import { Component } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 

  isCollapsed = true;
  sidebarItems = [
    { icon: 'fa fa-home', text: 'Home' },
    { icon: 'fa fa-user', text: 'Profile' },
    { icon: 'fa fa-cogs', text: 'Settings' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  getMainContentClass() {
    return this.isCollapsed ? 'main-content-expanded' : 'main-content-collapsed';
}
}
