import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slogan: string = 'The first professional community platform for businesses';
  collaboration: string = '/assets/img/home/collaboration.png'
  teamwork: string = '/assets/img/home/teamwork.jpg'

  constructor() { }

  ngOnInit() {
  }

}
