import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServerComponent } from './components/controlServer/server.component';
import { TestComponent } from './components/test/test.component';
import { ModComponent } from './components/controlMod/mod.component';
import { ServerParamsComponent } from './components/paramsServer/params.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ModelModule } from './model/model.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    TestComponent,
    ModComponent,
    ServerParamsComponent,
    ChatComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModelModule,
    HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
