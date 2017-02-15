import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { SidebarService } from './sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bubble Talk';

  mostrarMenu: boolean = true;
  mostrarDrawer: boolean = false;

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService
  ) {}

  ngOnInit() {
  	this.authService.mostrarMenuEmitter.subscribe(
  		mostrar => this.mostrarMenu = mostrar
  	);

    this.sidebarService.mostrarDrawerEmitter.subscribe(
      mostrar => this.mostrarDrawer = mostrar
    );
  }
}