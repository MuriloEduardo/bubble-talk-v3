import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { SuaContaComponent } from './sua-conta/sua-conta.component';
import { LoginComponent } from './login/login.component';
import { ChatNaoEncontradoComponent } from './chat-nao-encontrado/chat-nao-encontrado.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
	{
		path: '',
		loadChildren: 'app/main/main.module#MainModule',
		canActivate: [AuthGuard]
	},
	{
		path: 'sua-conta',
		component: SuaContaComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'chat-nao-encontrado',
		component: ChatNaoEncontradoComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: ':id',
		loadChildren: 'app/chat/chat.module#ChatModule',
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}