import { RegisterComponent, LoginComponent } from './login';
import { MatrimonyComponent } from './matrimony';
import { Routes } from '@angular/router';
import { AuthGuard } from './login/guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'matrimony', component: MatrimonyComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch:'full', redirectTo: 'matrimony' }
];
