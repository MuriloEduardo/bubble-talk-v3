import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sua-conta',
  templateUrl: './sua-conta.component.html',
  styleUrls: ['./sua-conta.component.css']
})
export class SuaContaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
  	window.localStorage.removeItem('auth_key');
  	this.router.navigate(['login']);
  }

}
