import { Component, OnInit } from '@angular/core';

import { ChatsService } from './chats/chats.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	constructor(private chatsService: ChatsService) {
		this.chatsService.mostrarSidebar.emit(false);
	}

	ngOnInit() {
	}
}
