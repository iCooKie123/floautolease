import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface Link {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navLinks: Link[] = [
    { name: 'ACASA', path: '' },
    { name: 'SERVICII', path: 'servicii' },
    { name: 'MASINI', path: 'masini' },
    { name: 'CONTACT', path: 'contact' },
  ];
  navVisible = false;
  @HostBinding('class.mobile') isMobile = false;

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

  constructor(private router: Router) {
    this.isMobile = window.innerWidth < 768; // Set initial value based on window size
  }

  isActive(linkPath: string): boolean {
    return this.router.url === '/' + linkPath;
  }
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768; // Update value on window resize
    });
  }

  navigateTo(linkPath: string): void {
    this.toggleNav();
    this.router.navigate([linkPath]);
  }
}
