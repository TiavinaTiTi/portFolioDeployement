import {Component, inject, OnInit} from '@angular/core';

import {
  animateChild,
  query,
  stagger,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";
import {translate} from "../../shared/animations/translateAnimations";
import {fadeAnimations} from "../../shared/animations/fadeAnimations";
import {NgClass} from "@angular/common";
import {ThemeService} from "../../shared/services/theme/theme.service";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  animations: [
    trigger('translateLInOut', [
      transition(':enter', [
        useAnimation(translate, {
          params: {
            timings: '1000ms ease-in',
            right: '100%',
            left: '0%'
          }
        }),
        query('@fade',
          stagger(200, animateChild()), {optional: true}
        )
      ]),
      transition(':leave', [
        useAnimation(translate, {
          params: {
            timings: '500ms ease-out',
            right: '0%',
            left: '100%'
          }
        })
      ]),
    ]),

    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeAnimations)
      ]),
    ]),
  ]
})
export class ContactPageComponent implements OnInit{
  listContact = [
    {icon: 'bi bi-telephone-fill', label: 'telephone', value: '+261 34 09 407 74'},
    {icon: 'bi bi-google', label: 'e-mail', value: 'titus50231@gmail.com'},
    {icon: 'bi bi-facebook', label: 'facebook', value: 'Tiavina Ti\'Ti'},
    {icon: 'bi bi-linkedin', label: 'linkedin', value: 'Tiavina Randrianoelison'},
    {icon: 'bi bi-github', label: 'github', value: 'https://github.com/TiavinaTiTi'},
    {icon: 'bi bi-link', label: 'github', value: 'https://tiavinatiti.github.io/portFolioDeployement/home'},
    {icon: 'bi bi-geo-alt-fill', label: 'localisation', value: 'Antananarivo 101, Madagascar'},
  ]
  theme: string = 'light';
  themeService: ThemeService = inject(ThemeService);
  ngOnInit() {
    this.themeService.currentTheme.subscribe((value)=>{
      this.theme = value
    })
  }
}
