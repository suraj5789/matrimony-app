import { AlertService } from './../../common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ServiceResponse } from '../../common/services/service.response';
import { RegistrationService } from './service/registration.service';


@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: RegistrationService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            mobileNum: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get registerFormCtrls() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .subscribe(
                (result:ServiceResponse) => {
                    if(result.statusCode === 200 )
                    {
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);
                    }
                },
                error => {
                    this.alertService.error(error.error.message || 'There is some issue with Server. Please try again later.');
                    this.loading = false;
                });
    }
}
