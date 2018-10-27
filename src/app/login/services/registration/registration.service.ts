import { environment } from './../../../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RegistrationService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.baseURL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.baseURL}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.baseURL}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.baseURL}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.baseURL}/users/` + id);
    }
}