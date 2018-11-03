import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import {Router} from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {
private userSubscription: Subscription;
private user:User;
private links:Object = {
  'matrimony' : false,
  'contact-us' : false,
  'about-us' : false
}
  constructor(private userService:UserService, 
    private router:Router) { }

  ngOnInit() {
    this.userSubscription = this.userService.getUser()
    .subscribe((user:User) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.user = null;
    this.userService.setUser(this.user);
    this.router.navigate(['/login']);
  }

  linkClicked(_currentLink) {
    for(let link in this.links){
      this.links[link] = false;
    }
    this.links[_currentLink] = true;
  }

}
