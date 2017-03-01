import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		loadChildren: 'app/main/main.module#MainModule',
		canActivate: [AuthGuard]
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