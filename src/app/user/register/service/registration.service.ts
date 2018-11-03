import { ServiceResponse } from './../../../common/services/service.response';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../services/models/user';


@Injectable()
export class RegistrationService {
    private headers:HttpHeaders;
    private URL = 'user/register/';
    constructor(private http: HttpClient) { 
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Accept', 'application/json');
        this.headers = this.headers.append('Content-Type', 'application/json');
    }

    register(_user: User) {
        let user = {
            user : _user
        };
        return this.http.post<ServiceResponse>(`${environment.baseURL}/${this.URL}`, 
        user, {headers : this.headers, responseType : "json"});
    }
}