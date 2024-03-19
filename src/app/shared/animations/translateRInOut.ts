import {animate, keyframes, query, style, transition, trigger} from "@angular/animations";

export let translateRInOut = trigger('translateRInOut', [
  transition(':enter', [
    // style({opacity: 0}),
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
    ),
    query('@fade',[])
  ]),
  transition(':leave', [
    animate(
      '500ms',
      keyframes([
        style({
          opacity: 0,
          transform: 'translateX(0%)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translateX(15%)',
          offset: 0.4,
        }),
        style({
          transform: 'translateX(-100%)',
          offset: 1,
        })
      ])
    )
  ]),
])
export let translateLInOut = trigger('translateLInOut', [
  transition( ':enter', [
    style({opacity: 0}),
    animate(
      '1000ms',
      keyframes([
        style({
          opacity: 0,
          transform: 'translateX(100%)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translateX(-15%)',
          offset: 0.4,
        }),
        style({
          transform: 'translateX(0%)',
          offset: 1,
        })
      ])
    )
  ]),
  transition(':leave', [
    animate(
      '500ms',
      keyframes([
        style({
          opacity: 0,
          transform: 'translateX(0%)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translateX(-15%)',
          offset: 0.4,
        }),
        style({
          transform: 'translateX(100%)',
          offset: 1,
        })
      ])
    )
  ]),
])
