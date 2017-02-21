import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	modalActions = new EventEmitter<string|MaterializeAction>();

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}
	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}
}
