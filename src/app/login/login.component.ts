import { User } from './services/models/user';
import { AlertService } from './../common/services/alert.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ServiceResponse } from '../common/services/service.response';
import { UserService } from './services/user/user.service';


@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            mobileNum: [2222222222, Validators.required],
            password: ['pwd', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get loginFormCtrls() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.loginFormCtrls.mobileNum.value, this.loginFormCtrls.password.value)
            .subscribe(
                (data:ServiceResponse) => {
                    this.userService.setUser(<User>data.result.user);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
