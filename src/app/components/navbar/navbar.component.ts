import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../services/auth.service";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  notiCount: number;
  notiList;

  constructor(
    private authService: AuthService,
    private router: Router,
    private chatService: ChatService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.notiCount = 2; // create and call getNotiCount();
    this.notiList = [ //create and call getNoti()
      {
        title:'Noti one',
        content:'Noti content 1',
        time:'2 mins ago'
      },
      {
        title:'Noti two',
        content:'Noti content 2',
        time:'4 mins ago'
      },
    ]
  }

  onLogoutClick(): boolean {
    this.authService.logout();
    this.chatService.disconnect();
    this.router.navigate(["/login"]);
    this.onNavigate();
    return false;
  }

  onNavigate(): void {
    this.collaspseNav();
  }

  collaspseNav(): void {
    let butt = this.el.nativeElement.querySelector(".navbar-toggle");
    let isCollapsed = this.hasClass(butt, "collapsed");
    if (isCollapsed == false) {
      butt.click();
    }
  }

  hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

}
