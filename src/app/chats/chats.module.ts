import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsService } from './chats.service';

import { ChatsComponent } from './chats.component';
import { ChatsRoutingModule } from './chats.routing.module';

@NgModule({
	imports: [
		CommonModule,
		ChatsRoutingModule
	],
	declarations: [
		ChatsComponent
	],
	providers: [
		ChatsService
	]
})
export class ChatsModule {}