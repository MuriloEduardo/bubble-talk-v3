import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ChatsComponent } from './chats/chats.component';
import { NovoComponent } from './novo/novo.component';

const mainRoutes: Routes = [
	{ path: '', component: MainComponent, children: [
		{ path: 'novo', component: NovoComponent },
		{ path: '', component: ChatsComponent }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(mainRoutes)],
	exports: [RouterModule]
})
export class MainRoutingModule {}