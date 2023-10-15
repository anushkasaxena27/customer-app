import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() isCollapsed: boolean | undefined;
  currentDateTime: string | undefined;

  ngOnInit() {
    this.updateDateTime();
    // Use an interval to update the date and time every second
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime() {
    const currentDateTime = new Date();
    this.currentDateTime = currentDateTime.toISOString().slice(0, 19).replace("T", " ");
  }
}

