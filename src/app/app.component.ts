import { Component, Input ,HostListener, Renderer2, ElementRef } from '@angular/core';
import { SidebarItem } from './components/sidebar/sidebar-item.model';
import {CustomerService } from './services/customer.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer_app';
  constructor(private el: ElementRef, private renderer: Renderer2,private dialogService: CustomerService) {}
  @Input() isCollapsed: boolean | undefined;
  sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', icon: 'dashboard', routerLink: '/dashboard' },
    { label: 'Profile', icon: 'person', routerLink: '/profile' },]
    isScrollingEnabled = true;

    @HostListener('mouseenter')
    disableScroll() {
      this.renderer.removeStyle(this.el.nativeElement, 'overflow');
    }
  // openDialog(): void {
  //   this.dialogService.openDialog();
  // }
  
}
