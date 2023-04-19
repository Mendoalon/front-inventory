import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidena',
  templateUrl: './sidena.component.html',
  styleUrls: ['./sidena.component.css']
})
export class SidenaComponent implements OnInit {
  mobileQuery: MediaQueryList;

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Categorías", route: "home", icon: "category"},
    {name: "Productos", route: "home", icon: "production_quantity_limits"}
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  shouldRun = true;


  ngOnInit(): void {
  }

}