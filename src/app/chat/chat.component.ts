import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

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

	constructor(
		private sidebarService: SidebarService,
		private chatsService: ChatsService,
		private route: ActivatedRoute,
		private router: Router
	) { }

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
}
