import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import * as io from 'socket.io-client';

import { ChatsService } from '../main/chats/chats.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

	inscricao: Subscription;
	chat: {};

	constructor(
		private sidebarService: SidebarService,
		private chatsService: ChatsService,
		private route: ActivatedRoute,
		private router: Router,
		private chatService: ChatService
	) { }

	ngOnInit() {
		this.inscricao = this.route.params.subscribe((params: any) => {
				this.chatsService.getChat(params['id']).subscribe(chat => {
					
					if(!chat) {
						this.router.navigate(['nao-encontrado']);
						return;
					}

					this.chat = chat;
					this.sidebarService.showDrawer(chat);
				});
			}
		)

		this.chatService.connection = this.chatService.getMessages().subscribe(message => {
	      this.chatService.messages.push(message);
	    });
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
		
		this.chatService.connection.unsubscribe();

		this.sidebarService.hideDrawer();
	}
}