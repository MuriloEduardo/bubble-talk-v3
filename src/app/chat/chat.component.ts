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
		this.inscricao = this.route.params.subscribe(
			(params: any) => {
				this.id = params['id'];

				this.chat = this.chatsService.getChat(this.id);

				this.sidebarService.showDrawer(this.chat);

				if(this.chat == null) {
					this.router.navigate(['chat-nao-encontrado']);
				}
			}
		)
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();

		this.sidebarService.hideDrawer();
	}
}
