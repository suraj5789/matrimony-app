import { User } from './../../login/services/models/user';
import { UserService } from './../../login/services/user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {
private userSubscription: Subscription;
private user:User;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.userSubscription = this.userService.getUser()
    .subscribe((user:User) => {
      this.user = user;
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.user = null;
    this.userService.setUser(this.user);
    this.router.navigate(['/']);
  }

}
