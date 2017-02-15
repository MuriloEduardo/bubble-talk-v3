import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdlUpgradeDirective } from './directives/mdl-upgrade.directive';

import { AuthService } from './login/auth.service';
import { SidebarService } from './sidebar/sidebar.service';
import { ChatsService } from './main/chats/chats.service';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { SuaContaComponent } from './sua-conta/sua-conta.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { ChatNaoEncontradoComponent } from './chat-nao-encontrado/chat-nao-encontrado.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MdlUpgradeDirective,
    SuaContaComponent,
    LoginComponent,
    ChatNaoEncontradoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ChatsService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
