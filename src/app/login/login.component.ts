import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private usuario: Usuario = new Usuario();
	resposta: {};

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		if(window.localStorage.getItem('auth_key')) {
			this.router.navigate(['']);
		}

		this.authService.showNav(false);
	}

	ngOnInit() {
	}

	fazerLogin() {
		this.authService.fazerLogin(this.usuario).then((res) => {
			if(res) {
				this.resposta = {res: true, string: 'Sucesso!'};
				this.router.navigate(['']);
			} else {
				this.resposta = {res: false, string: 'Login e/ou Senha Inválidos'};
			}
		});
	}
}
