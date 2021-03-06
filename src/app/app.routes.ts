import { RegisterComponent, LoginComponent, AuthGuard } from './user';
import { MatrimonyComponent } from './matrimony';
import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './user/profile/profile.component';

export const appRoutes: Routes = [
    { path: 'about-us', component: AboutusComponent },
    { path: 'contact-us', component: ContactusComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user/create-profile', component: ProfileComponent },
    { path: 'matrimony', component: MatrimonyComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch:'full', redirectTo: 'matrimony' }
];
