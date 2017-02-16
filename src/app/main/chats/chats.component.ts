import { Component, OnInit } from '@angular/core';

import { ChatsService } from './chats.service';

import { Chats } from './chats';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

	chats: any[];

	constructor(private chatsService: ChatsService) { }

	ngOnInit() {
		this.chatsService.chats.subscribe(chats => {
			this.chats = chats;
		});
	}
}
