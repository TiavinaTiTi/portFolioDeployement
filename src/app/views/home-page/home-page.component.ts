import {Component, inject, Input, OnInit} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
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
import {ThemeService} from "../../shared/services/theme/theme.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink,
    NgClass
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [
    trigger('translateRInOut', [
      transition(':enter', [
        useAnimation(translate, {
          params: {
            timings: '1000ms ease-in'
          }
        }),
        query('@fade',
          stagger(200, animateChild())
        )
      ]),
      transition(':leave', [
        useAnimation(translate, {
          params: {
            timings: '500ms ease-out',
            right: '0%',
            left: '-100%'
          }
        })
      ]),
    ]),

    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeAnimations)
      ]),
    ]),
    trigger('translateLInOut', [
      transition(':enter', [
        useAnimation(translate, {
          params: {
            timings: '1000ms ease-in',
            right: '100%',
            center: '-15%',
            left: '0%'
          }
        })
      ]),
      transition(':leave', [
        useAnimation(translate, {
          params: {
            timings: '500ms ease-out',
            right: '0%',
            center: '-15%',
            left: '100%'
          }
        })
      ]),
    ]),
  ]
})
export class HomePageComponent implements OnInit{
  show: boolean = true
  themeService: ThemeService = inject(ThemeService);
  private route: Router = inject(Router);
  theme: string = 'light'

  ngOnInit() {
    this.themeService.currentTheme.subscribe((theme)=>{
      this.theme = theme
    })
  }

  isShowFalse(url: string){
    console.log('this.isShowFalse()')
    this.show = false
    setTimeout(()=>{
      this.route.navigateByUrl(url)
    }, 500)
  }

}
