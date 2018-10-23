import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const paths: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignUpFormComponent },
  { path: "", component: DashboardComponent },
  { path: "forgotPass", component: ForgotPasswordComponent},
  { path: "dashboard/:email", component: DashboardComponent }
];
@NgModule({
  declarations: [

    AppComponent,
    SignUpFormComponent,
    LoginFormComponent,
    DashboardComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
