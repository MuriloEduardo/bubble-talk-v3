import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main.routing.module';

import { MainComponent } from './main.component';
import { ChatsComponent } from './chats/chats.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { NovoComponent } from './novo/novo.component';

@NgModule({
	imports: [
		CommonModule,
		MainRoutingModule,
		FormsModule
	],
	declarations: [
		ChatsComponent,
		MainComponent,
		PessoasComponent,
		NovoComponent
	]
})
export class MainModule {}