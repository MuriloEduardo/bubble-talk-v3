import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { SuaContaComponent } from './sua-conta/sua-conta.component';
import { ChatsComponent } from './chats/chats.component';

const mainRoutes: Routes = [
	{ path: '', component: MainComponent, children: [
		{ path: 'sua-conta', component: SuaContaComponent },
		{ path: '', component: ChatsComponent }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(mainRoutes)],
	exports: [RouterModule]
})
export class MainRoutingModule {}