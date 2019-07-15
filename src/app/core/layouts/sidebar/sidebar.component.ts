import { Component, OnInit } from '@angular/core';
import { faCoffee, faHome, faProjectDiagram, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faCoffee = faCoffee;
  faHome = faHome;
  faAt = faAt;
  faProjectDiagram = faProjectDiagram;

  constructor() { }

  ngOnInit() {
  }

}
