import {animate, animation, keyframes, style} from "@angular/animations";


export let translateAnimation = animation(
  animate(
    '1000ms',
    keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)',
        offset: 0.4,
      }),
      style({
        transform: 'translateX(0%)',
        offset: 1,
      })
    ])
  )
)
