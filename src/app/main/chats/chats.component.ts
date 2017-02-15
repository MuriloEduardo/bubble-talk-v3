import { Component, OnInit } from '@angular/core';

import { ChatsService } from './chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

	chats: any[];

	constructor(private chatsService: ChatsService) { }

	ngOnInit() {
		this.chats = this.chatsService.getChats();
	}
}
