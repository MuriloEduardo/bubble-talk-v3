import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat.routing.module';

import { ChatComponent } from './chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { ConversasComponent } from './conversas/conversas.component';
import { LayoutComponent } from './layout/layout.component';
import { EquipeComponent } from './equipe/equipe.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ChatRoutingModule
	],
	declarations: [
		ChatComponent,
		DashboardComponent,
		ConfiguracaoComponent,
		ConversasComponent,
		LayoutComponent,
		EquipeComponent
	],
	providers: []
})
export class ChatModule {}