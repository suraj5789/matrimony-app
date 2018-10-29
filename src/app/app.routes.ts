import { RegisterComponent, LoginComponent } from './login';
import { MatrimonyComponent } from './matrimony';
import { Routes } from '@angular/router';
import { AuthGuard } from './login/guards/auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

export const appRoutes: Routes = [
    { path: 'about-us', component: AboutusComponent },
    { path: 'contact-us', component: ContactusComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'matrimony', component: MatrimonyComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch:'full', redirectTo: 'matrimony' }
];
