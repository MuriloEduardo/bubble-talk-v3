import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChatComponent } from './chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

const chatRoutes = [
	{ path: '', component: ChatComponent, children: [
		{ path: '', component: DashboardComponent },
		{ path: 'configuracao', component: ConfiguracaoComponent }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(chatRoutes)],
	exports: [RouterModule]
})
export class ChatRoutingModule {}