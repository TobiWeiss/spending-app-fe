import {animate, group, query, style, transition, trigger} from "@angular/animations";

export const slider =
  trigger('routeAnimation', [
    transition('first => second', slideTo('bottom')),
    transition('first => third', slideTo('top')),
    transition('second => third', slideTo('bottom')),
    transition('second => first', slideTo('top')),
    transition('third => first', slideTo('bottom')),
    transition('third => second', slideTo('top'))
  ]);

function slideTo(direction: string) {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        [direction]: 0,
        height: '100%',
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({[direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
