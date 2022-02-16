import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerComponent } from './components/controlServer/server.component';
import { TestComponent } from './components/test/test.component';
import { ModComponent } from './components/controlMod/mod.component';
import { ServerParamsComponent } from './components/paramsServer/params.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: "servers", component: ServerComponent },
  { path: "mods", component: ModComponent},
  { path: "params", component: ServerParamsComponent},
  { path: "chat", component: ChatComponent},
  { path: "profile", component: ProfileComponent},
  { path: "**", redirectTo: "/servers"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
