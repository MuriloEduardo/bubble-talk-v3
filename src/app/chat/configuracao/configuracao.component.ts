import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../main/chats/chats.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

	chat: any;

	constructor(private chatsService: ChatsService) { }

	ngOnInit() {
		this.chatsService.chat.subscribe(chat => {
			this.chat = chat;
		});
	}

	deleteChat() {
		this.chatsService.deleteChat(this.chat._id).subscribe(data => {
			console.log(data)	
			if(data.n==1) {

			}
		});
	}
}