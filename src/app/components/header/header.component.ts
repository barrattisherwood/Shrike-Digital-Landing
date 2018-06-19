import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerFixed = false;
  headerHeight = 0;
  constructor() { }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const topHeaderHeight = $event.target.documentElement.scrollTop;
    if (topHeaderHeight > this.headerHeight) {
      this.headerFixed = true;
    } else if (this.headerFixed && topHeaderHeight < this.headerHeight) {
      this.headerFixed = false;
    }
  }

  setHeaderHeight(event) {
    this.headerHeight = event;
  }

  ngOnInit() {}

}
