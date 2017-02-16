import { Component, OnInit } from '@angular/core';

import { ChatsService } from '../chats/chats.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

	appname: string;

	constructor(private chatsService: ChatsService) { }

	ngOnInit() {
	}

	addChat(event) {
		event.preventDefault();
		
		if(!this.appname) return false;

		let newChat = {
			dados: {
				appname: this.appname
			}
		};
		
		this.chatsService.addChat(newChat).subscribe(chat => {
			this.appname = undefined;
		});
	}
}
