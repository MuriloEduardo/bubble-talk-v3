import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat.routing.module';

import { ChatComponent } from './chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

@NgModule({
	imports: [
		CommonModule,
		ChatRoutingModule
	],
	declarations: [
		ChatComponent,
		DashboardComponent,
		ConfiguracaoComponent
	],
	providers: []
})
export class ChatModule {}