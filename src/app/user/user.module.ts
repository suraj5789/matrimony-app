import { UserService } from './services/user.service';
//import { fakeBackendProvider, ErrorInterceptor, JwtInterceptor } from './../helpers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlertService } from './../common/services/alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './login/service/authentication.service';
import { RegistrationService } from './register/service/registration.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  exports : [
    LoginComponent, 
    RegisterComponent, 
    ProfileComponent],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        RegistrationService,
        UserService
       // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        
    ],
})
export class UserModule { }
