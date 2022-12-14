import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from './register/register.page';
import { AuthService } from './auth.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'registrati',
    component: RegisterPage,
  },
];

@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
