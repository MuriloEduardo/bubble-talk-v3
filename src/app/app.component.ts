import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './login/auth.service';
import { ChatsService } from './main/chats/chats.service';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bubble Talk';

  mostrarMenu: boolean = false;
  mostrarSidebar: boolean = false;

  constructor(
    private authService: AuthService,
    private chatsService: ChatsService
  ) {}

  ngOnInit() {
  	this.authService.mostrarMenuEmitter.subscribe(
  		mostrar => this.mostrarMenu = mostrar
  	);
    this.chatsService.mostrarSidebar.subscribe(
      mostrar => this.mostrarSidebar = mostrar
    );
  }
}