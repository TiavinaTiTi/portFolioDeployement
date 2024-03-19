import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-signin-page',
  standalone: true,
    imports: [
        HeaderComponent,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.scss',
  animations: [

    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate(
          '1s ease-out',
          keyframes([
            style({opacity: .2, offset: 0.3}),
            style({opacity: .6, offset: 0.6}),
            style({opacity: .8, offset: 1})
          ])
        )
      ]),
    ]),
  ]
})
export class SigninPageComponent {

}
