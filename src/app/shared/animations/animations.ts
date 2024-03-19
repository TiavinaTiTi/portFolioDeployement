import {animate, animation, keyframes, style} from "@angular/animations";


/**
 * Translate Right To Left & Left To right
 * default RightToLeft
 */
export let translate = animation([
  animate(
    '{{ timings }}',
    keyframes([
      style({
        opacity: 0,
        transform: 'translateX({{ right }})',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translateX({{ center }})',
        offset: 0.4,
      }),
      style({
        transform: 'translateX({{ left }})',
        offset: 1,
      })
    ])
  )
], {
  params: {
    timings: '1000ms',
    right: '-100%',
    center: '15%',
    left: '0%'
  }
})
