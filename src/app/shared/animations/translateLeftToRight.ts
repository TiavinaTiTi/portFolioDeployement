import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export let translateLeftToRight = trigger('translateLeftToRight', [
  transition('void => *', [
    style({opacity: 0, transform: 'scale(0.5) translateX(-200%)'}),
    animate(
      '1000ms',
      keyframes([
        style({opacity: 1, offset: 0.3}),
        style({transform: 'translateX(0)', offset: 0.6}),
        style({transform: 'scale(1) translateX(0)', offset: 1})
      ])
    )
  ]),
  transition('* => void', [
    animate(
      '500ms',
      keyframes([
        style({transform: 'scale(0.5)', offset: 0.3}),
        style({transform: 'scale(0.5) translateX(-200%)', offset: 0.7}),
        style({opacity: 0, offset: 1})
      ])
    )
  ])
])
