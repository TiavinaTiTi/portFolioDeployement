import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  // show: boolean = false;


  /**
   * Methode active apres click
   * @param $event
   */
  /*isShow($event: boolean) {
    console.log("isShow")
    this.show = (this.show)? false : true
    // this.show = true
  }*/
}
