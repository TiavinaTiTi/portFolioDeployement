import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {
  animate,
  animateChild,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";
import {translate} from "../../shared/animations/animations";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink
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
        style({opacity: 0}),
        animate(
          '.6s ease-out',
          keyframes([
            style({opacity: .2, offset: 0.3}),
            style({opacity: .6, offset: 0.6}),
            style({opacity: .8, offset: 1})
          ])
        )
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

  constructor(private route: Router) {
  }
  ngOnInit() {
  }

  isShowFalse(url: string){
    console.log('this.isShowFalse()')
    this.show = false
    setTimeout(()=>{
      this.route.navigateByUrl(url)
    }, 500)
  }

}
