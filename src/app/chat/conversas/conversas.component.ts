import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.css']
})
export class ConversasComponent implements OnInit {

	messages;
	message;
	dadosSocket: any = this.chatService.socket;
	contatos: any[] = this.chatService.equipe;
	conversa: {};

	constructor(private chatService: ChatService) { }

	ngOnInit() {
	    this.messages = this.chatService.messages;

	    this.chatService.conversaAtual.subscribe(
	  		conversa => this.conversa = conversa
	  	);
	}

	sendMessage(){
		this.chatService.sendMessage(this.message);
		this.message = undefined;
	}

	setConversa(conversa: any) {
		this.chatService.setConversa(conversa);
	}
}