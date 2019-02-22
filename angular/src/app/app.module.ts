import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';





import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthGuard1 } from './guards/auth.guard1';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { ShowtaskComponent } from './components/showtask/showtask.component';
import { EdittaskComponent } from './components/edittask/edittask.component';
import { DetailtaskComponent } from './components/detailtask/detailtask.component';
import { FooterComponent } from './components/footer/footer.component';
import { homedir } from 'os';

import { AboutusComponent } from './components/aboutus/aboutus.component';



const appRoutes: Routes =  [
 
  {path:'register', component: RegisterComponent,canActivate:[AuthGuard1]},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'forgotpassword', component: ForgotpasswordComponent,canActivate:[AuthGuard1]},
  {path:'resetpassword', component: ResetpasswordComponent},
  {path:'addtask', component: AddtaskComponent,canActivate:[AuthGuard]},
  {path:'showtask', component: ShowtaskComponent, canActivate:[AuthGuard]},
  {path: 'edittask/:_id',component: EdittaskComponent,canActivate:[AuthGuard]},
  {path: 'detailtask/:_id',component: DetailtaskComponent,canActivate:[AuthGuard]},
  {path:'aboutus',component:AboutusComponent},
  {path:'', component: HomeComponent},
  {path:'home' , component : HomeComponent},
  {path: '**', component : HomeComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AddtaskComponent,
    ShowtaskComponent,
    EdittaskComponent,
    DetailtaskComponent,
    FooterComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard,AuthGuard1],
  bootstrap: [AppComponent]
})
export class AppModule { }
