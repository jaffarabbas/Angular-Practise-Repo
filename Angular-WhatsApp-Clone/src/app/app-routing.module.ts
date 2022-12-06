import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDefaultPageComponent } from './components/main-container/chat-area/chat-default-page/chat-default-page.component';
import { ChatRoomComponent } from './components/main-container/chat-area/chat-room/chat-room.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import {ChatGuard} from "./guards/chat.guard";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path:'',
    component: MainContainerComponent,
    children:[
      {
        path: 'room/:id',
        component: ChatRoomComponent
      },
      {
        path: '',
        component: ChatDefaultPageComponent
      }
    ],
    canActivate: [ChatGuard]
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
