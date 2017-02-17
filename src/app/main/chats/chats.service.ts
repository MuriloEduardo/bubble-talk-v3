import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatsService {

	private apiUrl: string = 'http://127.0.0.1:8080/api/';
	public chats: any;
	public chat: any;

  	constructor(private http: Http) {
  		console.dir('Chats Service Inicializado...');
  		this.chats = this.http.get(this.apiUrl + 'chats').map(res => res.json());
  	}

	getChat(id: string) {
		return this.chat = this.http.get(this.apiUrl + 'chat/' + id).map(res => res.json());
	}

	addChat(newChat: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'chat', JSON.stringify(newChat), {headers: headers}).map(res => res.json());
	}

	deleteChat(id: string) {
		return this.http.delete(this.apiUrl + 'chat/' + id).map(res => res.json());
	}

	updateChat(chat: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'chat' + chat._id, JSON.stringify(chat), {headers: headers}).map(res => res.json());
	}
}
