import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
	nome: string;
	email: string;
	equipe: any[] = this.chatService.equipe;

	constructor(private chatService: ChatService) { }

	ngOnInit() {
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}

	addUser(event) {
		event.preventDefault();
		
		if(!this.email) return false;

		let newUser = {
			nome: this.nome,
			email: this.email
		};
		
		this.chatService.equipe.push(newUser);

		this.closeModal();
	}
}
