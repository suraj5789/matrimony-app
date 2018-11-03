import { ServiceResponse } from './../../../common/services/service.response';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationService {
    private headers:HttpHeaders;
    private URL = 'user/authenticate/';
    constructor(private http: HttpClient) { 
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Accept', 'application/json');
        this.headers = this.headers.append('Content-Type', 'application/json');
    }

    login(mobileNum: string, password: string):Observable<ServiceResponse> {
        let user = {
            user: {
                mobileNum: mobileNum,
                password: password
            }
        };
        let headers : HttpHeaders
        return this.http.post<ServiceResponse>(`${environment.baseURL}/${this.URL}`, 
        user, {headers : this.headers, responseType : "json"});
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    handleError() {
        console.error('err');
    }
}