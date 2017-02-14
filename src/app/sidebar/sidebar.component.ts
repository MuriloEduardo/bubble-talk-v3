import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	chat: any;

	constructor(private sidebarService: SidebarService) { }

	ngOnInit() {
		this.chat = this.sidebarService.chat;
	}
}
