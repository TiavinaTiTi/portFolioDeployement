import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterStateSnapshot} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {ThemeService} from "../../shared/services/theme/theme.service";

@Component({
  selector: 'app-template-page',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgClass,
    NgIf
  ],
  templateUrl: './template-page.component.html',
  styleUrl: './template-page.component.scss'
})
export class TemplatePageComponent implements OnInit{
  themeService:ThemeService = inject(ThemeService)
  theme:string = 'light';
  activate: boolean = false;
  route = inject(Router);
  activeRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.themeService.currentTheme.subscribe((theme)=>{
      this.theme = theme
    })
  }


  setTheme(){
    const valTheme = (this.theme == 'light')? 'dark' : 'light'
    this.themeService.setCurrentTheme(valTheme)
  }

  classActivate(){
    this.route.navigate(['bard'])
  }

}
