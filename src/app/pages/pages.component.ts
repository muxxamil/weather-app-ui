import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pages',
  template: `
  <router-outlet></router-outlet>
    `
})
export class Pages {
  public menuItems: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }
}
