import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavBarComponent implements OnInit {
  innerWidth!: number;
  isMobile: boolean = false;
  menuIsOpen: boolean = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 600 ? true : false;
  }

  menuToggle() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 600 ? true : false;
  }

}
