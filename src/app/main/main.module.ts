import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main.routing.module';

import { MainComponent } from './main.component';

import { ChatsService } from './chats/chats.service';

import { ChatsComponent } from './chats/chats.component';

import { PessoasComponent } from './pessoas/pessoas.component';

@NgModule({
	imports: [
		CommonModule,
		MainRoutingModule
	],
	declarations: [
		ChatsComponent,
		MainComponent,
		PessoasComponent
	],
	providers: [
		ChatsService
	]
})
export class MainModule {}