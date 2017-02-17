import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import * as io from 'socket.io-client';

import { ChatsService } from '../main/chats/chats.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

	id: string;
	inscricao: Subscription;
	chat: any;
	socket: any = null;
	chatinp = '';
	roomname = '';

	constructor(
		private sidebarService: SidebarService,
		private chatsService: ChatsService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.socket = io('http://127.0.0.1:3000');
	}

	ngOnInit() {
		this.inscricao = this.route.params.subscribe((params: any) => {
				this.chatsService.getChat(params['id']).subscribe(chat => {
					
					if(!chat) {
						this.router.navigate(['nao-encontrado']);
						return;
					}

					console.log(this.chat)
					this.chat = chat;
					this.sidebarService.showDrawer(chat);
				});
			}
		)
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();

		this.sidebarService.hideDrawer();
	}

	send(msg) {
		if(this.roomname)
			this.socket.emit(this.roomname, msg);
		else
			console.log('Join a room first');
	}

	joinroom(roomname) {
		let listener = Observable.fromEvent(this.socket, this.roomname);
		console.log('Connected to ' + this.roomname);
		listener.subscribe((payload) => {
			console.log('From room ' + this.roomname + ' - ' + payload);
		})
	}
}
