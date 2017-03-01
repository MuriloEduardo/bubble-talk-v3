import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChatComponent } from './chat.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ConversasComponent } from './conversas/conversas.component';
import { LayoutComponent } from './layout/layout.component';

const chatRoutes = [
	{ path: '', component: ChatComponent, children: [
		{ path: 'nao-encontrado', component: NaoEncontradoComponent },
		{ path: 'conversas', component: ConversasComponent },
		{ path: 'equipe', component: EquipeComponent },
		{ path: 'configuracao', component: ConfiguracaoComponent },
		{ path: 'layout', component: LayoutComponent },
		{ path: '', component: DashboardComponent }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(chatRoutes)],
	exports: [RouterModule]
})
export class ChatRoutingModule {}