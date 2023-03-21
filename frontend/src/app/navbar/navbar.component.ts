import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems = [
    { route: '/dashboard', label: 'Dashboard' },
    { route: '/empresas', label: 'Empresas' }
  ];

  constructor(private router: Router) {}

  goto(pageUrl: string) {
    this.router.navigateByUrl(pageUrl);
  }  
}

