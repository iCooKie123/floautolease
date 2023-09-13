import { Component, OnInit } from '@angular/core';
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
  links: Link[] = [
    { name: 'ACASA', path: '' },
    { name: 'MASINI', path: 'masini' },
    { name: 'CONTACT', path: 'contact' },
  ];
  activeLink = this.links[0];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const link = this.links.find((l) => url.includes(l.path));
        if (link) {
          this.activeLink = link;
        }
      }
    });
  }

  handleClick(link: Link) {
    this.activeLink = link;
    this.router.navigate([link.path]);
  }
}
