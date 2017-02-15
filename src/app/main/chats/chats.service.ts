import { Injectable } from '@angular/core';

@Injectable()
export class ChatsService {

  	constructor() { }

	getChats() {
		return [
			{
				id: 'bm1n2bn1mb21b2lkm',
				nome: 'Empresa 1'
			},
			{
				id: '0a9sdk0a9sd0a9s',
				nome: 'Empresa 2'
			},
			{
				id: 'l68p6l78p67lp8p6',
				nome: 'Empresa 3'
			},
			{
				id: '09askd0a9ksd',
				nome: 'Empresa 4'
			},
			{
				id: '7sdg7a6sgd76ags',
				nome: 'Empresa 5'
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
