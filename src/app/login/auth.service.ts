import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

	private _showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

	apiUrl: string = 'http://127.0.0.1:3000/api/';
	usuarioAutenticado: boolean = false;
	mostrarMenuEmitter: Observable<boolean> = this._showNav.asObservable();
	
	constructor(private http: Http) { }

	fazerLogin(usuario: Usuario) {

		let headers = new Headers();
		let creds = 'email=' + usuario.email + '&senha=' + usuario.senha;

		headers.append('Content-Type', 'application/X-www-form-urlencoded');

		return new Promise((resolve) => {
			this.http.post(this.apiUrl + 'authenticate', creds, {headers: headers}).subscribe((data) => {
				if(data.json().success) {
					window.localStorage.setItem('auth_key', data.json().token);
					this.usuarioAutenticado = true;
				}
				resolve(this.usuarioAutenticado);
			});
		});
	}

	showNav(ifShow: boolean) {
		this._showNav.next(ifShow);
	}
}
