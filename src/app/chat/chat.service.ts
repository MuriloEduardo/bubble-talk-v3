import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';

import { ChatsService } from '../main/chats/chats.service';

@Injectable()
export class ChatService {

	socket;
	connection;
	url = 'http://localhost:3000';
	messages: any[] = [];
	equipe: any[] = [
		{
			_id: '09asdkasfksmdovn2nwjef',
			nome: 'Jonas Augusto'
		},
		{
			_id: '9kj09sdkv0skasijk2wmlq',
			nome: 'Maria Claudia'
		},
		{
			_id: '8s9dfjs09dkfs0df0sd9fsd',
			nome: 'Ricardo Antonio'
		}
	];
	conversa: {};
	conversaAtual = new EventEmitter<Object>();

	constructor(private chatsService: ChatsService) {
		console.log('Chat Service Inicializado...')
	}

	connect() {
		// Se connecta com o socket, toda vez que entra numa aplicação
		this.socket = io(this.url);
	}

	setRoom(room: string) {
		// Seta os dados usuarios no socket
		this.socket.emit('set:room', room);

		let observable = new Observable(observer => {
			this.socket.on('join:room', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}

	getLeftRoom() {
		let observable = new Observable(observer => {
			this.socket.on('left:room', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}

	setUser(user: {}) {
		// Seta os dados usuarios no socket
		this.socket.emit('set:user', user);

		let observable = new Observable(observer => {
			this.socket.on('set:user', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}

	sendMessage(message){
		this.socket.emit('new:message', {message: message, conversa: this.conversa});    
	}

	getMessages() {
		let observable = new Observable(observer => {
			this.socket.on('message', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		})
		return observable;
	}

	getEquipe() {
		return this.equipe;
	}

	setConversa(conversa: any) {
		this.conversa = conversa;
		this.conversaAtual.emit(conversa);
	}
}