import {Component} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-template-page',
  standalone: true,
    imports: [
        HeaderComponent,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ],
  templateUrl: './template-page.component.html',
  styleUrl: './template-page.component.scss'
})
export class TemplatePageComponent {


}
