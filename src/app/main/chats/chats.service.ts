import { Injectable } from '@angular/core';

@Injectable()
export class ChatsService {

  	constructor() { }

	getChats() {
		return [
			{
				id: '111',
				nome: 'Sistemas Global'
			}
		];
	}

	getChat(id: string) {
		let chats = this.getChats();

		for (var i = 0; i < chats.length; ++i) {
			let chat = chats[i];
			if(chat.id == id) {
				return chat;
			}
		}
		
		return null;
	}
}
