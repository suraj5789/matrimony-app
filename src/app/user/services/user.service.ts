import { BehaviorSubject , Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import AppConstants from '../../helpers/app.constants';
import Base64TransCoder from '../../helpers/base64.transcoder';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject:BehaviorSubject <User> = new BehaviorSubject<User>(null);
  private user:User;
  redirectUrl:string;
  constructor() { 
    if(this.isUserLoggedIn() && !this.user) {
      this.setUser(this.getUserFromStorage());
    }
   }

  public getUser():Observable<User>{
    return this.subject.asObservable();
  }

  public setUser(_user:User) {
    this.subject.next(_user);
    this.user = _user;
    this.updateUserToStorage();
  }

  public logOffUser() {
    this.subject.next(null);
    this.user = null;
    this.updateUserToStorage();
  }

  public isUserLoggedIn(): boolean {
    return (localStorage.getItem(AppConstants.USER_KEY) !== '' 
    && localStorage.getItem(AppConstants.USER_KEY) !== null 
    && localStorage.getItem(AppConstants.USER_KEY) !== undefined)
  }

  private updateUserToStorage() {
    if(this.user && this.user.token) {
      let uName = Base64TransCoder.encode(this.user.firstName + Base64TransCoder.SEPERATOR_KEY + this.user.lastName);
      localStorage.setItem(AppConstants.USER_KEY, Base64TransCoder.encode(this.user.token));
      localStorage.setItem(AppConstants.USER_NAME, uName)
    }
    else {
      localStorage.removeItem(AppConstants.USER_KEY);
      localStorage.removeItem(AppConstants.USER_NAME);
    }
  }

  private getUserFromStorage(): User {
    let user:User = new User();
    let uName = Base64TransCoder.decode(localStorage.getItem(AppConstants.USER_NAME)).split(Base64TransCoder.SEPERATOR_KEY);
    user.firstName = uName[0];
    user.lastName = uName[1];
    user.token = Base64TransCoder.decode(localStorage.getItem(AppConstants.USER_KEY));
    return user;
  }
}
